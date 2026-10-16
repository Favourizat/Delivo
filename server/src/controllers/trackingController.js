


import { prisma } from "../config/db.js"

export const updateOrderStatus = async (req, res) => {
    try {
        const { trackingId } = req.params
        const { status, location, latitude, longitude, remarks } = req.body
        console.log("Latitude received:", latitude)
        console.log("Longitude received:", longitude)

        const trackingMessages = {
            PENDING: "Your delivery request has been received.",
            PICKED_UP: "Your package has been picked up.",
            IN_TRANSIT: "Your package is on its way to the destination.",
            DELIVERED: "Your package has been delivered successfully!"
        }

        if (!Object.hasOwn(trackingMessages, status)) {
            return res.status(400).json({
                message: "Invalid order status."
            })
        }

        const updatedOrder = await prisma.$transaction(async (tx) => {
            // Find an order reference [id] already stored in the database that matches with the [orderReference] value stored in tracking Id we will input
            const order = await tx.order.findUnique({
                where: { orderReference: trackingId }
            })

            if (!order) {
                const error = new Error("Order not found")
                error.statusCode = 404
                throw error
            }

            const updated = await tx.order.update({
                where: { id: order.id },
                data: { status }
            })

            await tx.trackingEvent.create({
                data: {
                    orderId: order.id,
                    status,
                    message: trackingMessages[status],
                    location: location || null,
                    latitude: latitude ?? null,
                    longitude: longitude ?? null,
                    remarks: remarks || null
                }
            })

            return updated
        })

        return res.status(200).json({
            message: "Order status updated successfully.",
            order: {
                trackingId: updatedOrder.orderReference,
                status: updatedOrder.status
            }
        })

    } catch (error) {
        console.error("Update order status error:", error)

        return res.status(error.statusCode || 500).json({
            message: error.statusCode
                ? error.message
                : "Failed to update order status."
        })
    }
}



export const getTrackingHistory = async (req, res) => {
    try {
        const { trackingId } = req.params

        const order = await prisma.order.findUnique({
            where: {
                orderReference: trackingId
            },
            include: {
                trackingEvents: {
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            }
        })

        if (!order) {
            return res.status(404).json({
                message: "Order not found. Please check your Tracking ID."
            })
        }


        return res.status(200).json({
            trackingId: order.orderReference,
            status: order.status,
            trackingEvents: order.trackingEvents.map((event) => ({
                status: event.status,
                message: event.message,
                location: event.location,
                remarks: event.remarks,
                createdAt: event.createdAt
            }))
        })

    } catch (error) {
        console.error("Get tracking history error:", error)

        return res.status(500).json({
            message: "Failed to retrieve tracking history."
        })
    }
}


export const getOrderTracking = async (req, res) => {
    try {
        console.log("NEW getOrderTracking function is running")
        const { trackingId } = req.params

        const order = await prisma.order.findFirst({
            where: {
                orderReference: trackingId,
                userId: req.user.id
            },
            include: {
                trackingEvents: {
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            }
        })

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            })
        }

        return res.status(200).json({
            trackingId: order.orderReference,
            status: order.status,

            pickupAddress: order.pickupAddress,
            deliveryAddress: order.deliveryAddress,
            orderCreatedAt: order.createdAt,
            packageType: order.packageType,

            trackingEvents: order.trackingEvents.map((event) => ({
                status: event.status,
                message: event.message,
                location: event.location,
                latitude: event.latitude,
                longitude: event.longitude,
                remarks: event.remarks,
                createdAt: event.createdAt
            })),
        })

    } catch (error) {
        console.error("Get order tracking error:", error)

        return res.status(500).json({
            message: "Failed to retrieve tracking information."
        })
    }
}