

"use client"

import API_URL from "@/lib/api"
import { PackageCheck } from "lucide-react"
import { useEffect, useState } from "react"


export default function AdminDashboard() {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [selectedOrder, setSelectedOrder] = useState(null)

    const [newStatus, setNewStatus] = useState("")
    const [location, setLocation] = useState("")
    const [remarks, setRemarks] = useState("")
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [saving, setSaving] = useState(false)
    const [updateMessage, setUpdateMessage] = useState("")

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // Fetch orders from the API(getAdminOrders)
                const response = await fetch(`${API_URL}/api/orders/admin/orders`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                )

                const data = await response.json()
                console.log("Admin orders API response:", data)

                if (!response.ok) {
                    throw new Error(
                        data.message || "Failed to retrieve tracking information"
                    )
                }

                setOrders(data.orders)
            } catch (error) {
                console.error("Fetch admin orders error:", error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchOrders()
    }, [])

    const handleTrackingUpdate = async () => {
        // We will add the update logic here next
        setSaving(true)
        setUpdateMessage("")
        // Sending request to our backend
        try {
            const coordinates = await lookupLocation(location)

            if (!location.trim()) {
                throw new Error("Please enter a tracking location")
            }
            const response = await fetch(
                `${API_URL}/api/tracking/orders/${selectedOrder.orderReference}/status`,
                {
                    method: "PUT",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        status: newStatus,
                        location: location,
                        remarks: remarks,
                        latitude: coordinates.latitude,
                        longitude: coordinates.longitude,
                    }),
                }
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Failed to update tracking information")
            }


            setOrders((previousOrders) =>
                previousOrders.map((order) =>
                    order.id === selectedOrder.id
                        ? { ...order, status: newStatus }
                        : order
                )
            )


            setUpdateMessage("Tracking information updated successfully")
            setSelectedOrder(null)
        } catch (error) {
            setUpdateMessage(error.message)
        } finally {
            setSaving(false)
        }
    }

    const lookupLocation = async (place) => {
        try {
            if (!place.trim()) return

            const response = await fetch(
                `${API_URL}/api/geocoding/lookup?place=${encodeURIComponent(place)}`
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Location lookup failed")
            }

            return {
                latitude: data.latitude,
                longitude: data.longitude,
            }

        } catch (error) {
            console.error("Location lookup failed:", error)
            throw error
        }
    }

    return (
        <main className="min-h-screen bg-slate-100 p-6 md:p-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
                        DELIVO MANAGEMENT
                    </p>

                    <h1 className="text-3xl font-bold text-[#102A43] md:text-4xl">
                        Manage Deliveries
                    </h1>

                    <p className="mt-2 text-slate-500">
                        View shipments and update delivery information.
                    </p>
                </div>

                <section className="rounded-2xl bg-white p-6 shadow-md">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-orange-100 p-3">
                            <PackageCheck
                                size={24}
                                className="text-orange-500"
                            />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#102A43]">
                                Shipment Orders
                            </h2>

                            <p className="text-sm text-slate-500">
                                {loading
                                    ? "Loading orders..."
                                    : error
                                        ? error
                                        : `${orders.length} orders found`}
                            </p>
                        </div>
                    </div>
                </section>


                {orders.length > 0 && (
                    <div className="mt-6 space-y-4">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                            >
                                <div className="rounded-xl border border-slate-200 p-4">
                                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h3 className="font-bold text-[#102A43]">
                                                {order.orderReference}
                                            </h3>

                                            <p>
                                                Package: {order.packageType}
                                            </p>

                                            <span className="w-fit rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                                                {order.status}
                                            </span>

                                            <button
                                                onClick={() => {
                                                    setSelectedOrder(order)
                                                    setNewStatus(order.status)
                                                    setLocation("")
                                                    setLatitude(null)
                                                    setLongitude(null)
                                                    setRemarks("")
                                                    setUpdateMessage("")
                                                }}
                                                className="mt-3 block rounded-lg bg-[#102A43] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#243f59]">
                                                Edit
                                            </button>
                                        </div>

                                        <div className="mt-4 grid gap-12 md:grid-cols-2">
                                            <div>
                                                <p>
                                                    Pickup Address
                                                </p>

                                                <p className="mt-1 text-sm text-slate-700">
                                                    {order.pickupAddress}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs font-semibold uppercase text-slate-400">
                                                    Delivery Address
                                                </p>

                                                <p className="mt-1 text-sm text-slate-700">
                                                    {order.deliveryAddress}
                                                </p>
                                            </div>

                                        </div>

                                        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                                            <p>
                                                Fee: N{Number(order.deliveryFee).toLocaleString()}
                                            </p>

                                            <p>
                                                Weight: {order.packageWeight ?? "Not specified"} kg
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {selectedOrder?.id === order.id && (
                                    <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-5">
                                        <h4 className="text-lg font-bold text-[#102A43]">
                                            Update Shipment
                                        </h4>
                                        <p className="mt-1 text-sm text-slate-600">
                                            Tracking ID: {selectedOrder.orderReference}
                                        </p>

                                        <div className="mt-4">
                                            <label className="mb-1 block text-sm font-semibold text-slate-700">
                                                Delivery Status
                                            </label>

                                            <select
                                                value={newStatus}
                                                onChange={(event) => setNewStatus(event.target.value)}
                                                className="w-full rounded-lg border border-slate-300 bg-white p-3">
                                                <option value="Pending">PENDING</option>
                                                <option value="PICKED_UP">Picked up</option>
                                                <option value="IN_TRANSIT">In Transit</option>
                                                <option value="DELIVERED">Delivered</option>
                                            </select>
                                        </div>

                                        <div className="mt-4">
                                            <label className="mb-1 block text-sm font-semibold text-slate-700">
                                                Current Package Location
                                            </label>

                                            <input
                                                type="text"
                                                value={location}
                                                onChange={(event) => setLocation(event.target.value)}
                                                placeholder="eg, Abuja, Canada"
                                                className="w-full rounded-lg border border-slate-300 bg-white p-3" />
                                        </div>

                                        <div className="mt-4">
                                            <label className="mb-1 block text-sm font-semibold text-slate-700">
                                                Delivery Remarks
                                            </label>

                                            <textarea
                                                value={remarks}
                                                onChange={(event) => setRemarks(event.target.value)}
                                                placeholder="eg. Package has arrived at the sorting facility"
                                                rows={1}
                                                className="w-full rounded-lg border border-slate-300 bg-white p-3" />
                                        </div>

                                        {updateMessage && (
                                            <p className="mt-3 text-sm font-medium text-[#102A43]">
                                                {updateMessage}
                                            </p>
                                        )}

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                onClick={handleTrackingUpdate}
                                                disabled={saving}
                                                className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white disabled:opacity-50"
                                            >
                                                {saving ? "Saving..." : "Save Tracking Update"}
                                            </button>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setSelectedOrder(null)}
                                            className="ml-3 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700"
                                        >
                                            Cancel
                                        </button>

                                    </div>


                                )}

                            </div>
                        ))}
                    </div>
                )}

            </div>
        </main>
    )
}