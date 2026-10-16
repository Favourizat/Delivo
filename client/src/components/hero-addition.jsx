import { Zap, PackageCheck, ShieldCheck, BadgeDollarSign } from "lucide-react"

export default function HeroAddition() {
    return (
        <main className="relative -mt-16 px-5 z-20">
            <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl bg-white px-8 py-7 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                <div className="flex flex-1 flex-col items-center justify-center gap-3">
                    <Zap size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-semibold text-[#102A43]">
                        Fast & Reliable
                    </h2>
                    <span className="-mt-2 text-[#102A43]">Delivered as scheduled</span>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-3">
                    <PackageCheck size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-semibold text-[#102A43]">Same-day delivery</h2>
                    <span className="-mt-2 text-[#102A43]">Today not tomorrow</span>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-3">
                    <ShieldCheck size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-semibold text-[#102A43]">Safe & Secure</h2>
                    <span className="-mt-2 text-[#102A43]">Handled with extra care</span>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-3">
                    <BadgeDollarSign size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-semibold text-[#102A43]">Affordable Pricing</h2>
                    <span className="-mt-2 text-[#102A43]">Quality at low costs</span>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-3">
                    <BadgeDollarSign size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-semibold text-[#102A43]">24/7 Support</h2>
                    <span className="-mt-2 text-[#102A43]">We are active</span>
                </div>
            </div>
        </main>
    )
}