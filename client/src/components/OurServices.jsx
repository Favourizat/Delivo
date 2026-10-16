
import Link from "next/link"
import Image from "next/image"
import {
    Bike,
    Truck,
    Van,
    House,
    ArrowUpRight,
    PackageCheck,
} from "lucide-react"

const services = [
    {
        title: "Doorstep Delivery",
        description:
            "Convenient pickup and delivery, bringing every package right to your doorstep.",
        image: "/delivo-hero1.jpg",
        alt: "Delivo doorstep delivery service",
        icon: House,
        accent: "bg-[#102A43]",
    },
    {
        title: "Bike Delivery",
        description:
            "Fast, flexible delivery through busy streets when every minute matters.",
        image: "/delivery1.jpg",
        alt: "Delivo motorcycle delivery service",
        icon: Bike,
        accent: "bg-[#f6a611]",
    },
    {
        title: "Van Delivery",
        description:
            "Secure and reliable transport for larger packages and business deliveries.",
        image: "/fast-hero.jpg",
        alt: "Delivo van delivery service",
        icon: Van,
        accent: "bg-[#356859]",
    },
    {
        title: "Truck Delivery",
        description:
            "Dependable transport solutions for bulky shipments and larger loads.",
        image: "/delivery2.jpg",
        alt: "Delivo truck delivery service",
        icon: Truck,
        accent: "bg-[#263b57]",
    },
]

export default function OurServices() {
    return (
        <main className="overflow-hidden bg-[#F7F9FC] py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Introduction */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    <div className="max-w-2xl">
                        <div className="mb-5 inline-flex items-center gap-3">
                            <span className="h-[2px] w-9 bg-[#f6a611]" />
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f6a611]">
                                Our Services
                            </p>
                        </div>

                        <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
                            Comprehensive Delivery Solutions for{" "}
                            <span className="text-[#f6a611]">
                                Your Business
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                            From local deliveries to nationwide logistics,
                            Delivo provides dependable delivery solutions
                            designed to keep your business moving. Whether
                            you are sending a single package or managing
                            deliveries at scale, we make logistics simpler
                            with speed, convenience, and reliability.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-5">
                            <Link
                                href="/services"
                                className="group inline-flex items-center gap-3 rounded-xl bg-[#102A43] px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(16,42,67,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#183c5c] hover:shadow-[0_14px_28px_rgba(16,42,67,0.24)]"
                            >
                                Explore All Services
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>

                            <div className="flex items-center gap-3 text-sm text-slate-500">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6a611]/15 text-[#102A43]">
                                    <PackageCheck size={21} />
                                </span>
                                <span className="font-medium">
                                    Delivery made simple
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="absolute -right-3 -top-3 h-28 w-28 rounded-3xl bg-[#f6a611]/20 sm:-right-5 sm:-top-5" />

                        <div className="relative h-[280px] overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(16,42,67,0.16)] sm:h-[360px] lg:h-[420px]">
                            <Image
                                src="/delivo-hero1.jpg"
                                alt="Delivo delivery solutions"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/65 via-transparent to-transparent" />

                            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/15 p-4 text-white shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                                    Moving your world
                                </p>
                                <p className="mt-1 text-lg font-bold sm:text-xl">
                                    Every delivery matters.
                                </p>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-3 -z-0 h-20 w-20 rounded-2xl border-2 border-[#f6a611]/50 sm:-bottom-5 sm:-left-5 sm:h-24 sm:w-24" />
                    </div>
                </div>

                {/* Section Heading */}
                <div className="mt-20 flex flex-col justify-between gap-4 sm:mt-28 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f6a611]">
                            Built Around Your Needs
                        </p>

                        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl lg:text-4xl">
                            Delivery solutions for every journey
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                            Choose the right delivery option for your packages,
                            business needs, and destinations.
                        </p>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon

                        return (
                            <article
                                key={service.title}
                                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_10px_30px_rgba(16,42,67,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#f6a611]/40 hover:shadow-[0_22px_45px_rgba(16,42,67,0.15)]"
                            >
                                <div className="relative h-52 overflow-hidden bg-slate-100 sm:h-56">
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                                    <span className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.accent} text-white shadow-lg ring-1 ring-white/20`}>
                                        <Icon size={23} strokeWidth={1.8} />
                                    </span>

                                    <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-[#102A43] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <ArrowUpRight size={18} />
                                    </span>
                                </div>

                                <div className="p-5 sm:p-6">
                                    <h3 className="text-lg font-bold tracking-tight text-[#102A43] transition-colors duration-300 group-hover:text-[#d99100]">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                                        {service.description}
                                    </p>

                                    <div className="mt-5 h-[2px] w-10 rounded-full bg-[#f6a611] transition-all duration-300 group-hover:w-16" />
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
