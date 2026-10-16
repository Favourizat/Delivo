
import Image from "next/image"

export default function Testimonial() {
    return (
        <main className="px-6 py-8 md:py-10 bg-[#F7F9FC]">
            <div>
                <h3 className="text-sm text-[#f6a611] uppercase font-bold">
                    What Our Clients Say
                </h3>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#102A43] font-bold my-3">
                    Trusted by 500+ Businesses Nationwide
                </h1>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex items-start gap-6 rounded-2xl bg-white p-6 shadow-[0_12px_35px_rgba(16,42,67,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,42,67,0.12)]">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                            <Image
                                src="/profile1.jpg"
                                alt="delivery"
                                fill
                                className="object-cover rounded-full" />
                        </div>

                        <div>
                            <p className="text-sm leading-6 text-[#102A43]/70">
                                “Delivo has made our deliveries faster and much easier to manage.
                                Their service is reliable, their tracking gives us peace of mind,
                                and our customers consistently receive their orders on time.
                                It’s one less thing for us to worry about as we grow our business.”
                            </p>

                            <h3 className="mt-5 text-sm font-bold text-[#102A43]">
                                Sarah Okafor
                            </h3>

                            <span className="mt-1 block text-xs text-[#102A43]/50">Founder Lumea Beauty, Nigeria.</span>
                        </div>

                    </div>

                    <div className="flex items-start gap-6 rounded-2xl bg-white p-6 shadow-[0_12px_35px_rgba(16,42,67,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,42,67,0.12)]">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                            <Image
                                src="/profile2.jpg"
                                alt="delivery"
                                fill
                                className="object-cover rounded-full" />
                        </div>

                        <div>
                            <p className="text-sm leading-6 text-[#102A43]/70">
                                “Keeping up with customer orders is much easier when deliveries are handled
                                efficiently. Our groceries get to customers safely and on time, and the smooth
                                delivery process has helped us provide a better shopping experience from
                                checkout to doorstep.”
                            </p>
                            <h3 className="mt-5 text-sm font-bold text-[#102A43]">
                                Daniel Eze
                            </h3>

                            <span className="mt-1 block text-xs text-[#102A43]/50">CEO, HaulMart</span>
                        </div>

                    </div>

                    <div className="flex items-start gap-6 rounded-2xl bg-white p-6 shadow-[0_12px_35px_rgba(16,42,67,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,42,67,0.12)]">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                            <Image
                                src="/profile3.jpg"
                                alt="delivery"
                                fill
                                className="object-cover rounded-full" />
                        </div>

                        <div>
                            <p className="text-sm leading-6 text-[#102A43]/70">
                                “Moving furniture requires care, reliability, and the right delivery team. 
                                Our orders are handled professionally and delivered safely to our customers, 
                                giving us confidence that every piece reaches its destination in great condition.”
                            </p>

                            <h3 className="mt-5 text-sm font-bold text-[#102A43]">
                                Johnson Jones
                            </h3>

                            <span className="mt-1 block text-xs text-[#102A43]/50">Founder, Oak & Haven Furniture</span>
                        </div>

                    </div>

                    <div className="flex items-start gap-6 rounded-2xl bg-white p-6 shadow-[0_12px_35px_rgba(16,42,67,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,42,67,0.12)]">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                            <Image
                                src="/profile4.jpg"
                                alt="delivery"
                                fill
                                className="object-cover rounded-full" />
                        </div>

                        <div>
                            <p className="text-sm leading-6 text-[#102A43]/70">
                                “Having a reliable delivery partner has made a big difference for our restaurant.
                                 Our meals reach customers fresh and on time, while the tracking feature keeps 
                                 everyone informed throughout the delivery process. 
                                 It has made our daily operations much smoother.”
                            </p>

                            <h3 className="mt-5 text-sm font-bold text-[#102A43]">
                                Tunde Adebayo
                            </h3>

                            <span className="mt-1 block text-xs text-[#102A43]/50">Chef, Tasty Kitchen</span>
                        </div>

                    </div>



                </div>
            </div>
        </main>
    )
}