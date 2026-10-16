

export default function TrackDelivery() {
    return (
        <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
            <div className="mx-auto flex min-h-[120px] items-center justify-center rounded-2xl bg-[#102A43] p-2">
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
            </div>
        </main>
    )
}