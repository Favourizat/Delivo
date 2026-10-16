
import Image from "next/image"
import { House } from "lucide-react"

export default function WhyChooseUs() {
    return (
        <main className="px-6 py-8 md:py-10 bg-[#14213D]">
            <div className="grid grid-cols-2 gap-9">

                <div className="relative min-h-[400px] overflow-hidden">
                    <Image
                        src="/delivery2.jpg"
                        alt="delivery image"
                        fill
                        className="object-cover" />
                </div>

                <div className="">
                    <h3 className="text-[#f6a611] text-sm font-semibold mb-2">WHY CHOOSE US</h3>

                    <h1 className="text-white text-3xl md:text-5xl font-bold pt-4">Trusted Logistics Partner</h1>

                    <span className="text-[#f6a611] font-semibold text-2xl md:text-4xl py-2">For a stronger Tomorrow</span>

                    <p className="text-white py-5">
                        We combine technology, experience, and global network
                        to delivery efficient logistics services that help your business grow
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-10">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                                <House size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-white flex flex-col items-center justify-center">
                                Global Network
                                <span>National Service</span>
                            </h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                                <House size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-white flex flex-col items-center justify-center">
                                Trusted Partners
                                <span>Reliable & Verified</span>
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 py-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                                <House size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-white flex flex-col items-center justify-center">
                                Experienced Riders
                                <span>Skilled & Dependable</span>
                            </h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                                <House size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-white flex flex-col items-center justify-center">
                                Real-time Tracking
                                <span>Track Every Step</span>
                            </h3>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    )
}