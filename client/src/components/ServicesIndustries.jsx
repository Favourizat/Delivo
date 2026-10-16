import {
  ShoppingCart,
  Factory,
  HeartPulse,
  CarFront,
  Utensils,
  Store,
  Cpu,
  HardHat,
  HeartPlus,
} from "lucide-react";

export default function ServicesIndustriesPage() {
    return (
        <main className="px-6 py-8 md:py-10">
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">

                {/* Card 1 */}
                <div className="flex flex-col items-center rounded-3xl bg-white px-6 py-7 shadow-[0_0_35px_rgba(16,42,67,0.18)]">
                    <div className="flex h-10 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                        <ShoppingCart
                            size={22}
                            strokeWidth={2}
                            className="text-white"
                        />
                    </div>

                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#102A43]">
                        Ecommerce
                    </h1>

                    <span className="mt-1 text-sm font-medium text-[#102A43]/55">
                        Retail & Fashion Items
                    </span>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center rounded-3xl bg-white px-6 py-7 shadow-[0_0_35px_rgba(16,42,67,0.18)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                        <Factory
                            size={22}
                            strokeWidth={2}
                            className="text-white"
                        />
                    </div>

                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#102A43]">
                        Manufacturing
                    </h1>

                    <span className="mt-1 text-sm font-medium text-[#102A43]/55">
                        Industrial Products
                    </span>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center rounded-3xl bg-white px-6 py-7 shadow-[0_0_35px_rgba(16,42,67,0.18)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                        <HeartPlus
                            size={22}
                            strokeWidth={2}
                            className="text-white"
                        />
                    </div>

                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#102A43]">
                        Healthcare
                    </h1>

                    <span className="mt-1 text-sm font-medium text-[#102A43]/55">
                        Medical Supplies
                    </span>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col items-center rounded-3xl bg-white px-6 py-7 shadow-[0_0_35px_rgba(16,42,67,0.18)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                        <CarFront
                            size={22}
                            strokeWidth={2}
                            className="text-white"
                        />
                    </div>

                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#102A43]">
                        Automotive
                    </h1>

                    <span className="mt-1 text-sm font-medium text-[#102A43]/55">
                        Vehicle Supplies
                    </span>
                </div>
                <div className="flex flex-col items-center rounded-3xl bg-white px-6 py-7 shadow-[0_0_35px_rgba(16,42,67,0.18)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                        <Utensils
                            size={22}
                            strokeWidth={2}
                            className="text-white"
                        />
                    </div>

                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#102A43]">
                        Food 
                    </h1>

                    <span className="mt-1 text-sm font-medium text-[#102A43]/55">
                        Prepared Meals
                    </span>
                </div>
                <div className="flex flex-col items-center rounded-3xl bg-white px-6 py-7 shadow-[0_0_35px_rgba(16,42,67,0.18)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                        <Store
                            size={22}
                            strokeWidth={2}
                            className="text-white"
                        />
                    </div>

                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#102A43]">
                        Retail
                    </h1>

                    <span className="mt-1 text-sm font-medium text-[#102A43]/55">
                        Consumer Goods
                    </span>
                </div>
                <div className="flex flex-col items-center rounded-3xl bg-white px-6 py-7 shadow-[0_0_35px_rgba(16,42,67,0.18)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                        <Cpu
                            size={22}
                            strokeWidth={2}
                            className="text-white"
                        />
                    </div>

                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#102A43]">
                        Technology
                    </h1>

                    <span className="mt-1 text-sm font-medium text-[#102A43]/55">
                        Electronics
                    </span>
                </div>
                <div className="flex flex-col items-center rounded-3xl bg-white px-6 py-7 shadow-[0_0_35px_rgba(16,42,67,0.18)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a611]">
                        <HardHat
                            size={22}
                            strokeWidth={2}
                            className="text-white"
                        />
                    </div>

                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#102A43]">
                        Construction
                    </h1>

                    <span className="mt-1 text-sm font-medium text-[#102A43]/55">
                        Building Materials
                    </span>
                </div>

            </div>
        </main>
    );
}