

"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Package, ArrowLeft } from "lucide-react"
import Link from "next/link"
import API_URL from "@/lib/api"

export default function TrackingResults() {
    const params = useParams()
    const trackingId = params.trackingId

    const [trackingData, setTrackingData] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

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
                                <div className="rounded-xl bg-blue-50 p-5">
                                    <p className="text-sm text-slate-500">
                                        Current Delivery Status
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold text-[#2456A6]">
                                        {trackingData.status}
                                    </h2>
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
                                        <ol className="space-y-6">
                                            {trackingData.trackingEvents.map((event, index) => (
                                                <li
                                                    key={`${event.status}-${event.createdAt}-${index}`}
                                                    className="relative border-l-2 border-blue-200 pb-2 pl-6 last:border-l-transparent"
                                                >
                                                    <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#2456A6]" />

                                                    <h2>
                                                        Tracking ID: {event.trackingId}
                                                    </h2>

                                                    <h2>
                                                        Current Package Location: Wuse
                                                    </h2>

                                                    <p>
                                                        The package is:
                                                        <br />
                                                        {event.status}
                                                    </p>

                                                    <p>
                                                        Remarks: {event.message}
                                                    </p>
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                </div>

                            </div>
                        )}
                    </div>

                </section>
            </div>
        </main>
    )
}s