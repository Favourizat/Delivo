
import {
    ClipboardList,
    PackageCheck,
    MapPin,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Book a Delivery",
        description:
            "Enter your pickup and delivery addresses, then provide a few details about your package.",
        icon: ClipboardList,
        label: "GET STARTED",
    },
    {
        number: "02",
        title: "Package Pickup",
        description:
            "Our rider collects your package from the pickup location you provide.",
        icon: PackageCheck,
        label: "WE COLLECT",
    },
    {
        number: "03",
        title: "Track Your Package",
        description:
            "Stay informed with delivery status updates as your package moves towards its destination.",
        icon: MapPin,
        label: "STAY INFORMED",
    },
    {
        number: "04",
        title: "Delivered Safely",
        description:
            "Your package arrives at its destination, completing a smooth delivery journey.",
        icon: CheckCircle2,
        label: "JOB COMPLETE",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative overflow-hidden bg-[#102A43] px-4 py-16 sm:px-6 md:py-24">
            {/* Subtle background accents */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#f6a611]/[0.06] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-[#f6a611]" />
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f6a611]">
                            Simple by design
                        </p>
                        <span className="h-px w-8 bg-[#f6a611]" />
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                        How Delivo works
                        <span className="mt-2 block text-white/50">
                            Four steps. One seamless journey.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                        From booking to doorstep, we make sending packages
                        straightforward, transparent, and reliable.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
                    {/* Connecting line on desktop */}
                    <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-white/10 lg:block" />

                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <article
                                key={step.number}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f6a611]/40 hover:bg-white/[0.07] sm:p-7"
                            >
                                {/* Number and icon */}
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#f6a611]/25 bg-[#102A43] text-[#f6a611] transition-colors duration-300 group-hover:border-[#f6a611] group-hover:bg-[#f6a611] group-hover:text-[#102A43]">
                                        <Icon size={21} strokeWidth={1.8} />
                                    </div>

                                    <span className="text-3xl font-light tracking-tight text-white/15 transition-colors duration-300 group-hover:text-[#f6a611]/50">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Step details */}
                                <div className="mt-8">
                                    <p className="text-[10px] font-bold tracking-[0.18em] text-[#f6a611]">
                                        {step.label}
                                    </p>

                                    <h3 className="mt-2 text-lg font-semibold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/60">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Bottom accent */}
                                <div className="mt-7 h-px w-full bg-white/10">
                                    <div className="h-full w-0 bg-[#f6a611] transition-all duration-500 group-hover:w-full" />
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Closing statement */}
                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
                    <p className="text-center text-xs leading-6 text-white/50 sm:text-left">
                        Every step handled with care. Every delivery matters.
                    </p>

                    <a
                        href="/package"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#f6a611] transition-colors hover:text-white"
                    >
                        Book a delivery
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
