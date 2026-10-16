import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroAddition from "@/components/hero-addition";
import OurServices from "@/components/OurServices"
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/How-It-Works";
import TrackDelivery from "@/components/TrackDelivery";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <main>
        <Hero />
        <HeroAddition />
        <OurServices />
        <WhyChooseUs />
        <Stats />
        <HowItWorks />
        {/* <TrackDelivery /> */}
        <Testimonial />
      </main>
    </>
  )
}
