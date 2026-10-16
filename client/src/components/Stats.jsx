
import {
    PackageCheck,
    Clock3,
    UsersRound,
    MapPin,
    ArrowUpRight,
} from "lucide-react";

const stats = [
    {
        id: 1,
        value: "10K+",
        label: "Deliveries completed",
        description: "Packages delivered with care",
        icon: PackageCheck,
    },
    {
        id: 2,
        value: "95%",
        label: "On-time delivery",
        description: "Reliability you can count on",
        icon: Clock3,
    },
    {
        id: 3,
        value: "30K+",
        label: "Happy customers",
        description: "People trusting us every day",
        icon: UsersRound,
    },
    {
        id: 4,
        value: "100+",
        label: "Locations covered",
        description: "Connecting destinations nationwide",
        icon: MapPin,
    },
];

export default function Stats() {
    return (
        <section className="bg-[#F7F9FC] px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2">
                            <span className="h-px w-7 bg-[#f6a611]" />
                            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b87900]">
                                Our Impact
                            </p>
                        </div>

                        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
                            Numbers that move
                            <span className="block text-[#8B98A7]">
                                the world forward.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-[#526477] md:pb-1">
                        Every delivery represents a promise kept. We’re building
                        a smarter, more reliable way to move packages and connect
                        people across the country.
                    </p>
                </div>

                {/* Statistics */}
                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.id}
                                className="group relative overflow-hidden rounded-2xl border border-[#102A43]/[0.08] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f6a611]/50 hover:shadow-[0_16px_40px_rgba(16,42,67,0.07)] sm:p-6"
                            >
                                {/* Top Row */}
                                <div className="flex items-center justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF5DF] text-[#102A43] transition-colors duration-300 group-hover:bg-[#f6a611]">
                                        <Icon
                                            size={19}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.6}
                                        className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f6a611]"
                                    />
                                </div>

                                {/* Value */}
                                <div className="mt-8">
                                    <p className="text-4xl font-semibold tracking-[-0.05em] text-[#102A43] sm:text-[42px]">
                                        {stat.value}
                                    </p>

                                    <h3 className="mt-2 text-sm font-semibold text-[#102A43]">
                                        {stat.label}
                                    </h3>

                                    <p className="mt-1.5 text-xs leading-5 text-slate-500">
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f6a611] transition-all duration-300 group-hover:w-full" />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Statement */}
                <div className="mt-6 flex flex-col gap-3 border-t border-[#102A43]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-5 text-slate-500">
                        Built around reliability. Driven by every delivery.
                    </p>

                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>

                        <span className="text-xs font-medium text-[#102A43]">
                            Moving forward, every day
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
