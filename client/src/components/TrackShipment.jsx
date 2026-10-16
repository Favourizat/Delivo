
import Image from "next/image"
import { House } from "lucide-react"
import TrackDelivery from "./TrackDelivery"

export default function TrackShipment() {
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

                <div>
                    <h3 className="text-[#f6a611] text-sm font-semibold mb-2">TRACK YOUR SHIPMENT</h3>

                    <h1 className="text-white text-3xl md:text-5xl font-bold pt-4">Real-time Tracking Made Simple</h1>

                    <p className="text-white py-5 text-base">
                        Stay informed every step of the way with Delivo’s shipment tracking. 
                        Simply enter your tracking number to get real-time status updates, 
                        follow your package’s journey from pickup to destination, 
                        and view the latest delivery progress. 
                        <br />With clear tracking information at every milestone, 
                        you can stay informed and know what to expect, right up to successful delivery.
                    </p>

                    {/* <div className="mx-auto flex min-h-[120px] items-center justify-center rounded-2xl p-2">
                        <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 rounded-2xl bg-white p-2 shadow-[0_15px_40px_rgba(16,42,67,0.12)] sm:flex-row">
                            <input
                                type="text"
                                placeholder="Enter Tracking Number"
                                className="h-12 flex-1 rounded-xl bg-transparent px-5 text-sm text-[#102A43] outline-none placeholder:text-[#102A43]/40"
                            />
                            <button className="h-12 rounded-xl bg-[#f6a611] px-8 text-sm font-semibold text-[#102A43] transition-transform hover:scale-105 cursor-pointer">
                                Track Delivery
                            </button>
                        </div>
                    </div> */}


                    <div className="mt-6">
                        {/* Timeline */}
                        <div className="grid grid-cols-4 items-center">

                            {/* Step 1 */}
                            <div className="flex items-center">
                                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f6a611] text-lg font-bold text-white">
                                    01
                                </div>

                                <div className="h-px w-full bg-[#f6a611]"></div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-center">
                                <div className="h-px w-full bg-[#f6a611]"></div>

                                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f6a611] text-lg font-bold text-white">
                                    02
                                </div>

                                <div className="h-px w-full bg-[#f6a611]"></div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-center">
                                <div className="h-px w-full bg-[#f6a611]"></div>

                                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f6a611] text-lg font-bold text-white">
                                    03
                                </div>

                                <div className="h-px w-full bg-[#f6a611]"></div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex items-center">
                                <div className="h-px w-full bg-[#f6a611]"></div>

                                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f6a611] text-lg font-bold text-white">
                                    04
                                </div>
                            </div>

                        </div>

                        {/* Labels */}
                        <div className="mt-1 grid grid-cols-4 gap-4 text-center">

                            <div>
                                <h2 className="text-lg font-bold text-[#f6a611]">
                                    Dispatched
                                </h2>
                                {/* <p className="mx-auto mt-3 max-w-[180px] rounded-xl bg-[#f6a611] px-4 py-3 text-sm leading-6 text-white">
                                    Your package is prepared and dispatched.
                                </p> */}
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-[#f6a611]">
                                    Pickup
                                </h2>
                                {/* <p className="mx-auto mt-3 max-w-[180px] rounded-xl bg-[#f6a611] px-4 py-3 text-sm leading-6 text-white">
                                    Our rider collects your package.
                                </p> */}
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-[#f6a611]">
                                    Track
                                </h2>
                                {/* <p className="mx-auto mt-3 max-w-[180px] rounded-xl bg-[#f6a611] px-4 py-3 text-sm leading-6 text-white">
                                    Follow your delivery in real time.
                                </p> */}
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-[#f6a611]">
                                    Delivered
                                </h2>
                                {/* <p className="mx-auto mt-3 max-w-[180px] rounded-xl bg-[#f6a611] px-4 py-3 text-sm leading-6 text-white">
                                    Your package arrives safely.
                                </p> */}
                            </div>

                        </div>
                    </div>



                </div>

            </div>
        </main>
    )
}