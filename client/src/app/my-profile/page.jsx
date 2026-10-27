"use client"

import { useEffect, useState } from "react"
import {
    ArrowDownLeft,
    ArrowUpRight,
    CalendarDays,
    Clock3,
    MapPin,
    Package,
    PackageCheck,
    RefreshCw,
    Truck,
} from "lucide-react"
import { UserRound } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import API_URL from "@/lib/api"
import { useSession } from "next-auth/react"


export default function MyProfilePage() {
    const router = useRouter()

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const { data: session, status } = useSession()

    const user = session?.user ?? null
    const userLoading = status === "loading"


    useEffect(() => {
        if(status === "unauthenticated"){
            router.replace("/login")
        }
    }, [status, router])

    useEffect(() => {

        if(!user) return

        const fetchOrders = async () => {
            try {
                const response = await fetch(
                    `/api/orders/my-orders`,
                    {
                        method: "GET",
                        cache: "no-store",
                    }
                )

                const data = await response.json()

                if (!response.ok) {
                    throw new Error(
                        data.message || "Failed to fetch orders"
                    )
                }

                setOrders(data.orders || [])
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchOrders()
    }, [user])

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-NG", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
    }

    const formatPrice = (amount) => {
        return `₦${Number(amount || 0).toLocaleString("en-NG")}`
    }

    const getStatusStyle = (status) => {
        const styles = {
            PENDING: "bg-amber-50 text-amber-700 ring-amber-200",
            CONFIRMED: "bg-blue-50 text-blue-700 ring-blue-200",
            ASSIGNED: "bg-indigo-50 text-indigo-700 ring-indigo-200",
            PICKED_UP: "bg-violet-50 text-violet-700 ring-violet-200",
            IN_TRANSIT: "bg-sky-50 text-sky-700 ring-sky-200",
            DELIVERED: "bg-emerald-50 text-emerald-700 ring-emerald-200",
            CANCELLED: "bg-red-50 text-red-700 ring-red-200",
        }

        return styles[status] || "bg-slate-100 text-slate-600 ring-slate-200"
    }

    const formatStatus = (status) => {
        return (status || "PENDING")
            .replaceAll("_", " ")
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase())
    }

    if (userLoading) {
        return <p className="p-6 text-center">Checking Login...</p>
    }

    if (!user) {
        return null
    }

    if (loading) {
        return (
            <main className="min-h-screen bg-slate-50 px-5 py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 h-8 w-56 animate-pulse rounded-lg bg-slate-200" />
                    <div className="mb-10 h-4 w-80 max-w-full animate-pulse rounded bg-slate-200" />
                    <div className="grid gap-5 md:grid-cols-2">
                        {[1, 2].map((item) => (
                            <div
                                key={item}
                                className="h-64 animate-pulse rounded-2xl border border-slate-200 bg-white"
                            />
                        ))}
                    </div>
                </div>
            </main>
        )
    }

    if (error) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5 py-16">
                <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                        <Package size={27} />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-slate-900">
                        We couldn't load your deliveries
                    </h1>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                        {error}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#142D4E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1C416B]"
                    >
                        <RefreshCw size={16} />
                        Try again
                    </button>
                </section>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#F4F7FB] px-4 py-10 sm:px-6 sm:py-14">

            <section className="flex items-center justify-center gap-6 px-6 py-6">

                <div className="w-full px-6 py-10 mb-9 max-auto rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">

                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
                        <UserRound size={27} className="text-[#1E3A5F]" />
                    </div>

                    <h2 className="mb-3 text-xl font-bold text-slate-900">
                        My Profile
                    </h2>

                    <h1 className="text-xl py-8 font-bold tracking-tight text-slate-900">
                        Hello {user?.email || "user"}, welcome to your profile
                    </h1>

                    <Link
                        href="/track-delivery"
                        className="bg-[#1E3A5F] text-white text-base w-full px-4 py-2 rounded-2xl transition-transform hover:scale-105 cursor-pointer"
                    >
                        Track delivery
                    </Link>

                    
                </div>

            </section>

            <div className="mx-auto max-w-6xl">
                {/* Page heading */}
                <section className="relative mb-9 overflow-hidden rounded-3xl bg-[#142D4E] px-6 py-9 text-white sm:px-10 sm:py-11">
                    <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -right-2 -top-12 h-48 w-48 rounded-full border border-white/10" />

                    <div className="relative z-10 flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-100">
                                <Truck size={14} />
                                Your delivery dashboard
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                My Deliveries
                            </h1>

                            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300 sm:text-base">
                                Keep track of your shipments, review delivery
                                details, and stay up to date with every order.
                            </p>
                        </div>

                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white/10">
                            <PackageCheck size={38} strokeWidth={1.5} />
                        </div>
                    </div>
                </section>

                {/* Summary */}
                <section className="mb-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/40">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-slate-500">
                                Total deliveries
                            </p>
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#244B78]">
                                <Package size={20} />
                            </span>
                        </div>
                        <p className="mt-4 text-3xl font-bold tracking-tight text-[#142D4E]">
                            {orders.length}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                            All your bookings
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/40">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-slate-500">
                                In progress
                            </p>
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                                <Truck size={20} />
                            </span>
                        </div>
                        <p className="mt-4 text-3xl font-bold tracking-tight text-[#142D4E]">
                            {orders.filter((order) =>
                                ["PENDING", "CONFIRMED", "ASSIGNED", "PICKED_UP", "IN_TRANSIT"].includes(
                                    order.status
                                )
                            ).length}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                            Awaiting completion
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/40">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-slate-500">
                                Delivered
                            </p>
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                <PackageCheck size={20} />
                            </span>
                        </div>
                        <p className="mt-4 text-3xl font-bold tracking-tight text-[#142D4E]">
                            {orders.filter(
                                (order) => order.status === "DELIVERED"
                            ).length}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                            Successfully completed
                        </p>
                    </div>
                </section>

                {/* Orders heading */}
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-xl font-bold tracking-tight text-slate-900">
                            Your shipments
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            {orders.length} {orders.length === 1 ? "delivery" : "deliveries"} in your account
                        </p>
                    </div>
                </div>

                {/* Empty state */}
                {orders.length === 0 ? (
                    <section className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#244B78]">
                            <Package size={30} strokeWidth={1.5} />
                        </div>
                        <h2 className="mt-5 text-xl font-bold text-slate-900">
                            No deliveries yet
                        </h2>
                        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                            Your delivery bookings will appear here once you
                            book your first shipment with Delivo.
                        </p>
                        <a
                            href="/package"
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#142D4E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1C416B]"
                        >
                            Book a delivery
                            <ArrowUpRight size={16} />
                        </a>
                    </section>
                ) : (
                    <section className="grid gap-5 lg:grid-cols-2">
                        {orders.map((order) => (
                            <article
                                key={order.id}
                                className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/40 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60"
                            >
                                {/* Card header */}
                                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-6">
                                    <div className="flex min-w-0 items-center gap-3">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F7] text-[#244B78]">
                                            <Package size={23} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                                Order reference
                                            </p>
                                            <h3 className="mt-1 break-all text-sm font-bold text-[#142D4E]">
                                                {order.orderReference}
                                            </h3>
                                        </div>
                                    </div>

                                    <span
                                        className={`inline-flex shrink-0 items-center rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${getStatusStyle(order.status)}`}
                                    >
                                        {formatStatus(order.status)}
                                    </span>
                                </div>

                                {/* Route */}
                                <div className="px-5 py-6 sm:px-6">
                                    <div className="relative space-y-6">
                                        <div className="absolute bottom-5 left-[9px] top-5 border-l-2 border-dashed border-slate-200" />

                                        <div className="relative flex gap-4">
                                            <span className="z-10 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#2D8A69] shadow-sm">
                                                <ArrowUpRight className="h-2.5 w-2.5 text-white" />
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                                    Pickup location
                                                </p>
                                                <p className="mt-1.5 text-sm leading-6 text-slate-700">
                                                    {order.pickupAddress || "Pickup address unavailable"}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative flex gap-4">
                                            <span className="z-10 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#244B78] shadow-sm">
                                                <MapPin className="h-2.5 w-2.5 text-white" />
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                                    Delivery destination
                                                </p>
                                                <p className="mt-1.5 text-sm leading-6 text-slate-700">
                                                    {order.deliveryAddress || "Delivery address unavailable"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Package details */}
                                <div className="mx-5 grid grid-cols-2 gap-4 rounded-xl bg-[#F6F8FB] p-4 sm:mx-6">
                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Package type
                                        </p>
                                        <p className="mt-1.5 text-sm font-semibold text-slate-800">
                                            {order.packageType || "Not specified"}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Delivery fee
                                        </p>
                                        <p className="mt-1.5 text-base font-bold text-[#142D4E]">
                                            {formatPrice(order.deliveryFee)}
                                        </p>
                                    </div>

                                    {order.packageDescription && (
                                        <div className="col-span-2 border-t border-slate-200 pt-3">
                                            <p className="text-xs text-slate-400">
                                                Package description
                                            </p>
                                            <p className="mt-1.5 break-words text-sm leading-6 text-slate-600">
                                                {order.packageDescription}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Card footer */}
                                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-5 py-4 sm:px-6">
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <CalendarDays size={15} className="text-slate-400" />
                                        Booked {formatDate(order.createdAt)}
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#244B78]">
                                        <Clock3 size={14} />
                                        Delivery details
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>
                )}

                <p className="mt-8 text-center text-xs leading-5 text-slate-400">
                    Need help with a shipment? Contact the Delivo support team.
                </p>
            </div>
        </main>
    )
}
