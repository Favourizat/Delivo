
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Hero() {

    return (
        <section className="px-4 py-4 md:px-6">
            <div className="relative h-[650px] overflow-hidden md:h-[750px]">

               <div className="absolute inset-0" />
                {/* IMAGE SLIDER */}
                <div className="absolute inset-0">

                    <Image
                        src="/truck2.jpg"
                        loading="eager"
                        alt="hero image"
                        fill
                        className="object-cover"
                    />

                </div>

            <div className="absolute z-[5] w-[70%] " />
                {/* DARK OVERLAY */}
                <div className="absolute inset-0 z-10 bg-black/40" />

                {/* TEXT CONTENT */}
                <div className="absolute inset-0 z-20 flex px-6 py-20">
                    <div className="max-w-3xl text-[#F7F2E8]">

                        <p className="mt-25 text-base font-semibold">
                            We delivery anywhere across the country
                        </p>

                        <h1 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
                            Smarter Logistics
                            <br />
                           <span className="text-[#f6a611] font-semibold">Faster Delivery</span>


                        </h1>

                        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#F7F2E8]/85 sm:text-base">
                            From pickup to doorstep, Delivo makes moving packages simple and reliable.
                            Send, track, and manage your deliveries with ease—all in one place.
                        </p>

                        <Link 
                        href="/track-delivery"
                            className="mt-9 inline-block bg-[#f6a611] px-8 py-4 text-sm font-medium tracking-wide text-white transform-transition duration-700 hover:scale-105 rounded-xl cursor-pointer">
                            Track Delivery
                        </Link>

                    </div>
                </div>

            </div>
        </section>
    );
}
