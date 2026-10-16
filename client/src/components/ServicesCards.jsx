
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
        number: "01",
    },
    {
        title: "Bike Delivery",
        description:
            "Fast, flexible delivery through busy streets when every minute matters.",
        image: "/delivery1.jpg",
        alt: "Delivo motorcycle delivery service",
        icon: Bike,
        accent: "bg-[#f6a611]",
        number: "02",
    },
    {
        title: "Van Delivery",
        description:
            "Secure and reliable transport for larger packages and business deliveries.",
        image: "/fast-hero.jpg",
        alt: "Delivo van delivery service",
        icon: Van,
        accent: "bg-[#356859]",
        number: "03",
    },
    {
        title: "Truck Delivery",
        description:
            "Dependable transport solutions for bulky shipments and larger loads.",
        image: "/delivery2.jpg",
        alt: "Delivo truck delivery service",
        icon: Truck,
        accent: "bg-[#263b57]",
        number: "04",
    },
]




export default function ServicesCards() {
    return (
        <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6a611]">
                Our services
            </h3>

            <h1 className="text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight pb-4 pt-2 text-[#102A43]">
                Comprehensive Delivery
                <br />
                Solutions for
                <span className="text-[#f6a611] text-2xl font-semibold leading-tight tracking-tight md:text-2xl lg:text-3xl px-2">your Business</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-6 text-[#102A43]">
                From local deliveries to nationwide logistics, Delivo provides dependable delivery solutions designed to keep your business moving.
                Whether you need to send a single package or manage deliveries at scale, our services are built around speed, convenience, and reliability so you can focus on your business.

            </p>
            <br />


            {/* Service Cards */}
                    <div className="mt-8 mb-15 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((service) => {
                            const Icon = service.icon

                            return (
                                <article
                                    key={service.title}
                                    className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_25px_rgba(16,42,67,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#f6a611]/50 hover:shadow-[0_22px_45px_rgba(16,42,67,0.13)]"
                                >
                                    <div className="relative h-52 overflow-hidden bg-slate-100 sm:h-56">
                                        <Image
                                            src={service.image}
                                            alt={service.alt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/55 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                                        <span className="absolute left-4 top-4 rounded-lg border border-white/25 bg-[#102A43]/75 px-3 py-1.5 text-xs font-bold tracking-widest text-white backdrop-blur-md">
                                            {service.number}
                                        </span>

                                        <span className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.accent} text-white shadow-lg ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110`}>
                                            <Icon size={23} strokeWidth={1.8} />
                                        </span>

                                        <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-[#102A43] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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

                                        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                                            <span className="text-xs font-semibold text-slate-400">
                                                Delivo Logistics
                                            </span>
                                            <span className="h-1 w-10 rounded-full bg-[#f6a611] transition-all duration-300 group-hover:w-16" />
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
        </div>
    )
}