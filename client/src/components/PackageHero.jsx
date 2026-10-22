
import Image from "next/image"
import Link from "next/link"

export default function PackageHero() {
    return (
        <section className="relative h-[40vh] min-h-[400px] overflow-hidden">
            <Image
                src="/delivery2.jpg"
                alt="ServicesHero"
                fill
                priority
                className="object-cover" />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 z-10 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                    <h1 className="font-display items-center text-xl font-bold text-[#f6a611] md:text-2xl">
                        BOOK A DELIVERY
                    </h1>

                    {/* <div className="mt-4 items-center gap-2 text-sm">
                        <Link
                        className="text-white font-bold text-3xl md:text-4xl lg:text-5xl transition-colors duration-300 hover:text-[var(--gold)"
                        href="/">
                            Send It. We’ll Get It There
                        </Link>

                        <p className="text-sm text-white pt-4 font-semibold">
                            Provide your pickup and delivery details, choose the service that works for you, 
                            <br />
                            and let Delivo handle the rest.
                        </p>                        
                    </div> */}
                </div>
        </section>
    )
}