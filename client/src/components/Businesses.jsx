
import Image from "next/image"
import Link from "next/link"

export default function Businesses() {
    return (
        <main className="my-8 bg-white px-4 py-8 sm:px-6 md:my-8 md:py-10 lg:py-10">
            <div className="mx-auto max-w-7xl">

                <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#f6a611] sm:text-base">
                    For Businesses and Individuals
                </h4>

                <h2 className="max-w-3xl pb-6 text-3xl font-bold leading-tight tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
                    Built for Everyday Deliveries
                </h2>

                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    Whether you're sending a package to a friend, fulfilling an online order,
                    or moving goods
                    <br className="hidden md:block" />
                    for your business, Delivo gives you a reliable way to get
                    it there.
                </p>

                <div className="grid grid-cols-1 items-center gap-6 py-10 md:grid-cols-2 md:gap-10 lg:gap-16 lg:py-14">

                    <div className="group relative min-h-[280px] w-full overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(16,42,67,0.12)] sm:min-h-[340px] lg:min-h-[390px]">
                        <Image
                            src="/business1.jpg"
                            alt="delivo"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent" />
                    </div>

                    <div className="w-full py-2 md:py-6">
                        <span className="mb-4 inline-flex rounded-full bg-[#f6a611]/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#9a6500]">
                            Personal Deliveries
                        </span>

                        <h4 className="pb-4 text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
                            For Individuals
                        </h4>

                        <p className="mb-8 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
                            Send gifts, documents, personal packages, food, and
                            more without the stress of arranging transportation yourself.
                        </p>

                        <Link
                            href="/package"
                            className="inline-flex items-center justify-center rounded-lg bg-[#f6a611] px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.15em] text-[#102A43] shadow-md shadow-[#f6a611]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e99a00] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#f6a611] focus:ring-offset-2"
                        >
                            Send a Package
                        </Link>
                    </div>

                </div>

                <div className="grid grid-cols-1 items-center gap-6 py-10 md:grid-cols-2 md:gap-10 lg:gap-16 lg:py-14">

                    <div className="group relative min-h-[280px] w-full overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(16,42,67,0.12)] sm:min-h-[340px] md:order-2 lg:min-h-[390px]">
                        <Image
                            src="/business2.jpg"
                            alt="delivo"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent" />
                    </div>

                    <div className="w-full py-2 md:order-1 md:py-6">
                        <span className="mb-4 inline-flex rounded-full bg-[#102A43]/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#102A43]">
                            Business Solutions
                        </span>

                        <h4 className="pb-4 text-2xl font-bold tracking-tight text-[#102A43] sm:text-3xl">
                            For Businesses
                        </h4>

                        <p className="mb-8 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
                            Simplify your deliveries and give your customers a smoother experience with dependable
                            logistics support.
                        </p>

                        <Link
                            href="/package"
                            className="inline-flex items-center justify-center rounded-lg bg-[#f6a611] px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.15em] text-[#102A43] shadow-md shadow-[#f6a611]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e99a00] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#f6a611] focus:ring-offset-2"
                        >
                            Send a Package
                        </Link>
                    </div>

                </div>

            </div>
        </main>
    )
}