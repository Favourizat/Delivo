
import Image from "next/image"
import Link from "next/link"

export default function ServicesHero() {
    return (
        <section className="relative h-[40vh] min-h-[400px] overflow-hidden">
            <Image
                src="/delivery2.jpg"
                alt="ServicesHero"
                fill
                priority
                className="object-cover" />

               <div className="absolute inset-y-0 left-0 z-[5] w-[70%]" />
                {/* DARK OVERLAY */}
                <div className="absolute inset-0 z-10 bg-black/50" />

                <div className="relative z-10 h-full flex-col px-6 py-22">
                    <h1 className="font-display text-sm font-bold text-[#f6a611] md:text-sm">
                        OUR SERVICES
                    </h1>

                    <div className="mt-4 items-center gap-2 text-sm">
                        <Link
                        className="text-white font-bold text-3xl md:text-4xl lg:text-5xl transition-colors duration-300 hover:text-[var(--gold)"
                        href="/">
                            Industries We Serve
                        </Link>

                        <p className="text-sm text-white pt-4 font-semibold">
                            We provide tailored logistic solutions for a wide range of industries and businesses, 
                            <br/ >
                            helping businesses move forward and faster. helping businesses move forward and faster.
                        </p>                        
                    </div>
                </div>
        </section>
    )
}