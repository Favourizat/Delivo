"use client"

import { useState } from "react"
import { ArrowRight, Package, ShieldCheck, Truck } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Trackdelivery() {
    const [orderReference, setOrderReference] = useState("")

    const router = useRouter()

    const handleTrackDelivery = (e) => {
        e.preventDefault()

        console.log("Tracking order:", orderReference)

        const trackingId = orderReference.trim()

        if(!trackingId) return

        router.push(`/track-delivery/${encodeURIComponent(trackingId)}`)
    }

    return (
        <main className="min-h-screen bg-[#F4F6FA] text-[#17243A]">
            {/* Hero section */}
            <section className="relative overflow-hidden bg-[#101D35] px-5 py-20 sm:px-8 sm:py-28">
                {/* Decorative background elements */}
                <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-6xl">
                    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                        {/* Left content */}
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-blue-200">
                                <Package size={16} />
                                <span>DELIVERY TRACKING</span>
                            </div>

                            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Every delivery.
                                <span className="block text-blue-400">
                                    Within reach.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                                Stay informed at every step. Enter your
                                order reference to check the latest status
                                of your Delivo delivery.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-4 text-sm text-slate-300">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={18} className="text-blue-400" />
                                    <span>Secure tracking</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Truck size={18} className="text-blue-400" />
                                    <span>Reliable delivery</span>
                                </div>
                            </div>
                        </div>

                        {/* Tracking form */}
                        <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-2xl shadow-black/20 sm:p-9">
                            <div className="mb-7">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2456A6]">
                                    <Package size={25} />
                                </div>

                                <h2 className="text-2xl font-bold tracking-tight text-[#17243A] sm:text-3xl">
                                    Track your package
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Enter the order reference provided
                                    when you booked your delivery.
                                </p>
                            </div>

                            <form onSubmit={handleTrackDelivery}>
                                <label
                                    htmlFor="orderReference"
                                    className="mb-2 block text-sm font-semibold text-[#26354D]"
                                >
                                    Order reference
                                </label>

                                <input
                                    id="orderReference"
                                    type="text"
                                    placeholder="e.g. DLV-123456789"
                                    value={orderReference}
                                    onChange={(e) => setOrderReference(e.target.value)}
                                    required
                                    className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#17243A] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                />

                                <button
                                    type="submit"
                                    className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#2456A6] px-5 font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#1B448A] active:scale-[0.99]"
                                >
                                    Track delivery
                                    <ArrowRight size={18} />
                                </button>
                            </form>

                            <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#F4F7FC] p-4">
                                <ShieldCheck
                                    size={19}
                                    className="mt-0.5 shrink-0 text-[#2456A6]"
                                />
                                <p className="text-xs leading-5 text-slate-500">
                                    Your tracking reference helps us locate
                                    the correct delivery and provide its
                                    latest available status.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supporting information */}
            <section className="px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2456A6]">
                            Simple. Clear. Reliable.
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17243A] sm:text-4xl">
                            Your delivery journey, made simple.
                        </h2>

                        <p className="mt-4 leading-7 text-slate-500">
                            Get the information you need to stay informed
                            about your package, from booking to delivery.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200/80 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2456A6]">
                                <Package size={23} />
                            </div>

                            <h3 className="mt-5 text-lg font-bold">
                                Find your delivery
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Use your unique order reference to look up
                                your shipment.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200/80 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2456A6]">
                                <Truck size={23} />
                            </div>

                            <h3 className="mt-5 text-lg font-bold">
                                Check its progress
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                View the latest delivery status recorded
                                in our system.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200/80 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2456A6]">
                                <ShieldCheck size={23} />
                            </div>

                            <h3 className="mt-5 text-lg font-bold">
                                Stay informed
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Get clear information about your order
                                without unnecessary steps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}