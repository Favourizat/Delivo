
    
import BookingForm from "@/components/BookingForm"
import PackageHero from "@/components/PackageHero"
import Image from "next/image"
import Link from "next/link"


export default function PackagePage(){
    return (
        <main>
            <PackageHero />
            <BookingForm />
        </main>
    )
}