

"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Package, ArrowLeft, CalendarDays, Clock, Copy, MapPin, MapPinned } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"
import API_URL from "@/lib/api"

const TrackingMap = dynamic(() => import("../../components/TrackingMap"),
    { ssr: false }
)

export default function TrackingResults() {
    const params = useParams()
    const trackingId = params.trackingId

    const [trackingData, setTrackingData] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    const formatDate = (date) => {
        if (!date) return "Not available"

        return new Date(date).toLocaleString("en-NG", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
        })
    }

    useEffect(() => {
        const fetchTrackingData = async () => {
            try {
                setLoading(true)
                setError("")

                const response = await fetch(
                    `${API_URL}/api/tracking/orders/${encodeURIComponent(trackingId)}/tracking`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                )

                const data = await response.json()
                console.log("Tracking API response:", data)

                if (!response.ok) {
                    throw new Error(
                        data.message || "Failed to retrieve tracking information"
                    )
                }

                setTrackingData(data)

            } catch (error) {
                setError(error.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        if (trackingId) {
            fetchTrackingData()
        }
    }, [trackingId])

    const latestEvent =
        trackingData?.trackingEvents?.[
        trackingData.trackingEvents.length - 1
        ]

    const hasCoordinates =
        typeof latestEvent?.latitude === "number" &&
        typeof latestEvent?.longitude === "number"

    return (
        <main className="min-h-screen bg-[#F4F6FA] px-5 py-12 text-[#17243A] sm:px-8">
            <div className="mx-auto max-w-4xl">
                <Link
                    href="/track-delivery"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2456A6] hover:underline">
                    <ArrowLeft size={18} />
                    Back to tracking
                </Link>

                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2456A6]">
                            <Package size={25} />
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold">
                                Tracking Results
                            </h1>

                            <p className="mt-1 text-sm text-slate-500">
                                Tracking ID: {trackingId}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        {loading && (
                            <p className="text-sm text-slate-500">
                                Loading your tracking information...
                            </p>
                        )}

                        {!loading && error && (
                            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                                {error}
                            </div>
                        )}

                        {!loading && trackingData && (
                            <div className="space-y-6">

                                <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="flex flex-col gap-10 sm:flex-row">
                                            <div>
                                                <p className="text-sm font-medium text-slate-500">
                                                    Current Delivery Status
                                                </p>

                                                <h2 className="mt-2 text-2xl font-bold text-[#2456A6]">
                                                    {trackingData.status.replaceAll("_", " ")}
                                                </h2>
                                            </div>

                                            <div>
                                                <p className="text-sm font-medium text-slate-500">
                                                    Current Package Location
                                                </p>

                                                <h2 className="mt-2 text-xl font-bold text-orange-600">
                                                    {trackingData.trackingEvents?.length
                                                        ? trackingData.trackingEvents[
                                                            trackingData.trackingEvents.length - 1
                                                        ].location || "Location not yet updated"
                                                        : "Location not yet updated"}
                                                </h2>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                navigator.clipboard.writeText(trackingData.trackingId)
                                            }
                                            className="inline-flex items-center gap-2 self-start rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-[#2456A6] hover:bg-blue-100"
                                        >
                                            <Copy size={16} />
                                            Copy Tracking ID
                                        </button>
                                    </div>

                                    <div className="mt-6 grid gap-4 border-t border-blue-100 pt-5 sm:grid-cols-2">
                                        <div className="flex items-start gap-3">
                                            <CalendarDays className="mt-1 text-[#2456A6]" size={20} />

                                            <div>
                                                <p className="text-sm text-slate-500">
                                                    Order Created
                                                </p>

                                                <p className="mt-1 text-sm font-semibold text-[#17243A]">
                                                    {formatDate(trackingData.orderCreatedAt)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Clock className="mt-1 text-[#2456A6]" size={20} />

                                            <div>
                                                <p className="text-sm text-slate-500">
                                                    Last Tracking Update
                                                </p>

                                                <p className="mt-1 text-sm font-semibold text-[#17243A]">
                                                    {trackingData.trackingEvents?.length
                                                        ? formatDate(
                                                            trackingData.trackingEvents[
                                                                trackingData.trackingEvents.length - 1
                                                            ].createdAt
                                                        )
                                                        : "No updates yet"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Pickup and Delivery Addresses */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                    {/* Pickup Address */}
                                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#2456A6]">
                                                <MapPin size={20} />
                                            </div>

                                            <h2 className="font-bold text-[#17243A]">
                                                Pickup Address
                                            </h2>
                                        </div>

                                        <p className="mt-4 text-sm leading-6 text-slate-600">
                                            {trackingData.pickupAddress || "Pickup address unavailable"}
                                        </p>
                                    </div>

                                    {/* Delivery Address */}
                                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                                                <MapPinned size={20} />
                                            </div>

                                            <h2 className="font-bold text-[#17243A]">
                                                Delivery Address
                                            </h2>
                                        </div>

                                        <p className="mt-4 text-sm leading-6 text-slate-600">
                                            {trackingData.deliveryAddress || "Delivery address unavailable"}
                                        </p>
                                    </div>

                                </div>

                                <div>
                                    <h2 className="mb-5 text-lg font-bold">
                                        Tracking TimeLine
                                    </h2>

                                    {!trackingData.trackingEvents || trackingData.trackingEvents.length === 0 ? (
                                        <p className="text-sm text-slate-500">
                                            No tracking updates have been recorded yet
                                        </p>
                                    ) : (
                                        <ol className="space-y-0">
                                            {trackingData.trackingEvents.map((event, index) => {
                                                const isLatest =
                                                    index === trackingData.trackingEvents.length - 1

                                                return (
                                                    <li
                                                        key={`${event.status}-${event.createdAt}-${index}`}
                                                        className="relative flex gap-4 pb-8 last:pb-0"
                                                    >
                                                        {/* Vertical marker and connecting line */}
                                                        <div className="relative flex flex-col items-center">
                                                            <span
                                                                className={`z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isLatest
                                                                    ? "bg-[#2456A6] text-white ring-4 ring-blue-100"
                                                                    : "border-2 border-blue-200 bg-white text-[#2456A6]"
                                                                    }`}
                                                            >
                                                                <Package size={15} />
                                                            </span>

                                                            {index !== trackingData.trackingEvents.length - 1 && (
                                                                <span className="absolute top-8 bottom-0 w-0.5 bg-blue-200" />
                                                            )}
                                                        </div>

                                                        {/* Event details appear to the right of each marker */}
                                                        <div className="min-w-0 flex-1 pb-2">
                                                            <p className="font-semibold text-gray-900">
                                                                {event.status.replaceAll("_", " ")}
                                                            </p>

                                                            <p className="mt-1 text-sm text-gray-500">
                                                                {formatDate(event.createdAt)}
                                                            </p>

                                                            <p className="mt-2 text-sm text-gray-600">
                                                                Remarks: {event.message}
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ol>
                                    )}
                                </div>

                            </div>
                        )}
                    </div>

                </section>
            </div >

            {hasCoordinates ? (
                <div className="mt-10">
                    <h2 className="mb-4 text-2xl font-bold text-[#102A43]">
                        Package Location Map
                    </h2>

                    <TrackingMap
                        latitude={trackingData.trackingEvents[
                            trackingData.trackingEvents.length - 1
                        ].latitude}
                        longitude={trackingData.trackingEvents[
                            trackingData.trackingEvents.length - 1
                        ].longitude}
                    />
                </div>
            ) : (
                <p className="mt-10 text-gray-600">
                    Location coordinates are not available yet
                </p>
            )}
        </main >
    )
}