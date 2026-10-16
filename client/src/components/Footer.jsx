import Link from "next/link";

import {
    MapPin,
    Phone,
    Mail,
} from "lucide-react";

  import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#102A43] text-white">

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">
                            Delivo<span className="text-[#f6a611]">.</span>
                        </h2>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
                            Fast, reliable, and convenient delivery solutions built
                            to keep your packages moving and your business growing.
                        </p>

                        {/* Socials */}
                        <div className="mt-6 flex items-center gap-3">
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:bg-[#f6a611] hover:text-[#102A43]"
                            >
                                <FaFacebookF size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:bg-[#f6a611] hover:text-[#102A43]"
                            >
                                <FaInstagram size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:bg-[#f6a611] hover:text-[#102A43]"
                            >
                                <FaTwitter size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:bg-[#f6a611] hover:text-[#102A43]"
                            >
                                <FaLinkedinIn size={18} />
                            </Link>
                        </div>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#f6a611]">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-white/60 transition-colors hover:text-[#f6a611]"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-white/60 transition-colors hover:text-[#f6a611]"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-white/60 transition-colors hover:text-[#f6a611]"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/how-it-works"
                                    className="text-sm text-white/60 transition-colors hover:text-[#f6a611]"
                                >
                                    How It Works
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/track"
                                    className="text-sm text-white/60 transition-colors hover:text-[#f6a611]"
                                >
                                    Track Delivery
                                </Link>
                            </li>
                        </ul>
                    </div>


                    {/* Services */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#f6a611]">
                            Our Services
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-white/60 transition-colors hover:text-[#f6a611]"
                                >
                                    Doorstep Delivery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-white/60 transition-colors hover:text-[#f6a611]"
                                >
                                    Bike Delivery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-white/60 transition-colors hover:text-[#f6a611]"
                                >
                                    Van Delivery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-white/60 transition-colors hover:text-[#f6a611]"
                                >
                                    Truck Delivery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-white/60 transition-colors hover:text-[#f6a611]"
                                >
                                    Business Delivery
                                </Link>
                            </li>
                        </ul>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#f6a611]">
                            Contact Us
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={18}
                                    className="mt-0.5 shrink-0 text-[#f6a611]"
                                />

                                <p className="text-sm leading-6 text-white/60">
                                    Lagos, Nigeria
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone
                                    size={18}
                                    className="shrink-0 text-[#f6a611]"
                                />

                                <p className="text-sm text-white/60">
                                    +234 800 000 0000
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail
                                    size={18}
                                    className="shrink-0 text-[#f6a611]"
                                />

                                <p className="text-sm text-white/60">
                                    hello@delivo.com
                                </p>
                            </div>

                            <p className="pt-2 text-sm text-white/60">
                                Mon – Sat: 8:00 AM – 8:00 PM
                            </p>

                        </div>
                    </div>

                </div>


                {/* Bottom */}
                <div className="mt-14 border-t border-white/10 pt-6">
                    <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">

                        <p className="text-white/40">
                            © 2026 Delivo. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <Link
                                href="/privacy"
                                className="text-white/40 transition-colors hover:text-[#f6a611]"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms"
                                className="text-white/40 transition-colors hover:text-[#f6a611]"
                            >
                                Terms of Service
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}