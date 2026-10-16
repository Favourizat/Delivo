import Businesses from "@/components/Businesses";
import OurServices from "@/components/OurServices";
import ServicesCards from "@/components/ServicesCards";
import ServicesHero from "@/components/ServicesHero";
import ServicesIndustriesPage from "@/components/ServicesIndustries";
import TrackShipment from "@/components/TrackShipment";


export default function ServicePage(){
    return (
        <main className="px-6 py-10 md:py-16">
            <div>
                <ServicesHero />
                <ServicesIndustriesPage />
                <ServicesCards />
                <TrackShipment />
                <Businesses />
            </div>
        </main>
    )
}