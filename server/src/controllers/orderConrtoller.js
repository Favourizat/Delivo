

import { prisma } from "../config/db.js"

export const createOrder = async (req, res) => {
    try {
        const userId = req.user.id

        const {
            pickupAddress,
            deliveryAddress,
            packageType,
            packageDescription,
            packageWeight,
            deliveryFee,
            scheduledAt,
        } = req.body

        if (
            !pickupAddress ||
            !deliveryAddress ||
            !packageType ||
            !packageDescription ||
            deliveryFee === undefined
        ) {
            return res.status(400).json({
                message: "Please provide all required order details"
            })
        }

        const orderReference = `DLV-${Date.now()}-${Math.floor(Math.random() * 1000)}`

        const order = await prisma.order.create({
            data: {
                user: {
                    connect: { id: userId },
                },
                orderReference,
                pickupAddress,
                deliveryAddress,
                packageType,
                packageDescription,
                packageWeight,
                deliveryFee,
                scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
            }
        })

        return res.status(201).json({
            message: "Order created successfully",
            order,
        })

    } catch (error) {
        console.error("Create order error:", error)

        return res.status(500).json({
            message: "Something went wrong while creating the order",
        })
    }
}

export const getMyOrders = async (req, res) => {
    try {
        const userId = req.user.id

        const orders = await prisma.order.findMany({
            where: {
                userId: userId,
            }
        })

        return res.status(200).json({
            status: "success",
            results: orders.length,
            orders,
        })
    } catch (error) {
        console.error("Get my orders error:", error)

        return res.status(500).json({
            message: "Something went wrong while fetching your orders"
        })
    }
}

export const getAdminOrders = async (req, res) => {
    try {
         // Fetch all orders
        const orders = await prisma.order.findMany({
            orderBy: {
                createdAt: "desc",
            }
        })
         // Return orders
        return res.status(200).json({
            status: "success",
            results: orders.length,
            orders,
        })
    } catch (error) {
         // Handle errors
        console.error("Get admin orders error:", error)

        return res.status(500).json({
            message: "Something went wrong while fetching orders",
        })
    }
}