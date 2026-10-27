
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        pickupAddress: "",
        pickupInstructions: "",
        recipientName: "",
        recipientPhone: "",
        deliveryAddress: "",
        deliveryInstructions: "",
        packageType: "",
        packageSize: "",
        estimatedWeight: "",
        packageDescription: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const weightMap = {
            "Under 1 kg": 0.5,
            "1–5 kg": 3,
            "5–10 kg": 7.5,
            "10–20 kg": 15,
            "20+ kg": 20,
        };

        const packageWeight =
            weightMap[formData.estimatedWeight] ?? null;

        try {
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    packageWeight,
                    deliveryFee: 10000,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to create order"
                );
            }

            console.log("API response:", data);

            alert(
                "Congratulations! You have successfully booked a delivery!"
            );

            router.push("/my-profile");
        } catch (error) {
            console.error("Error submitting order:", error);

            alert(
                error.message ||
                "Something went wrong. Please try again."
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full py-10 md:py-20"
        >
            <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4 py-10">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl border border-gray-200">

                    {/* Pickup Details */}
                    <section className="mb-8">
                        <div className="mb-4">
                            <p className="text-xl mb-3 font-bold uppercase tracking-[0.18em] text-[#f6a611]">
                                STEP 01
                            </p>
                            <h2 className="text-2xl font-bold mb-1 text-gray-800">
                                Pickup Details
                            </h2>
                            <p className="text-sm text-gray-600">
                                Where should we collect your package?
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email address"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800"
                                />
                            </div>

                            <div className="sm:col-span-2 lg:col-span-3">
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Pickup Address
                                </label>
                                <input
                                    type="text"
                                    name="pickupAddress"
                                    value={formData.pickupAddress}
                                    onChange={handleChange}
                                    placeholder="Enter pickup address"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800"
                                />
                            </div>

                            <div className="sm:col-span-2 lg:col-span-3">
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Pickup Instructions{" "}
                                    <span className="font-normal text-gray-400">
                                        (Optional)
                                    </span>
                                </label>
                                <textarea
                                    name="pickupInstructions"
                                    value={formData.pickupInstructions}
                                    onChange={handleChange}
                                    rows={2}
                                    placeholder="Landmarks, access instructions, or other helpful details..."
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800 resize-y"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="my-6 h-px bg-gray-200" />

                    {/* Delivery Details */}
                    <section className="mb-8">
                        <div className="mb-4">
                            <p className="text-xl mb-3 font-bold uppercase tracking-[0.18em] text-[#f6a611]">
                                STEP 02
                            </p>
                            <h2 className="text-2xl font-bold mb-1 text-gray-800">
                                Delivery Details
                            </h2>
                            <p className="text-sm text-gray-600">
                                Who should receive the package?
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Recipient's Name
                                </label>
                                <input
                                    type="text"
                                    name="recipientName"
                                    value={formData.recipientName}
                                    onChange={handleChange}
                                    placeholder="Enter recipient's name"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Recipient's Phone
                                </label>
                                <input
                                    type="tel"
                                    name="recipientPhone"
                                    value={formData.recipientPhone}
                                    onChange={handleChange}
                                    placeholder="Enter recipient's phone"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800"
                                />
                            </div>

                            <div className="sm:col-span-2 lg:col-span-1">
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Delivery Address
                                </label>
                                <input
                                    type="text"
                                    name="deliveryAddress"
                                    value={formData.deliveryAddress}
                                    onChange={handleChange}
                                    placeholder="Enter delivery address"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800"
                                />
                            </div>

                            <div className="sm:col-span-2 lg:col-span-3">
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Delivery Instructions{" "}
                                    <span className="font-normal text-gray-400">
                                        (Optional)
                                    </span>
                                </label>
                                <textarea
                                    name="deliveryInstructions"
                                    value={formData.deliveryInstructions}
                                    onChange={handleChange}
                                    rows={2}
                                    placeholder="Provide landmarks or instructions for a smooth delivery..."
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800 resize-y"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="my-6 h-px bg-gray-200" />

                    {/* Package Details */}
                    <section className="mb-8">
                        <div className="mb-4">
                            <p className="text-xl mb-3 font-bold uppercase tracking-[0.18em] text-[#f6a611]">
                                STEP 03
                            </p>
                            <h2 className="text-2xl font-bold mb-1 text-gray-800">
                                Package Details
                            </h2>
                            <p className="text-sm text-gray-600">
                                Tell us what you're sending.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Package Type
                                </label>
                                <select
                                    name="packageType"
                                    value={formData.packageType}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800 bg-white"
                                >
                                    <option value="">Select type</option>
                                    <option value="Documents">Documents</option>
                                    <option value="Food">Food</option>
                                    <option value="Clothing">Clothing</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Groceries">Groceries</option>
                                    <option value="Personal Items">Personal Items</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Package Size
                                </label>
                                <select
                                    name="packageSize"
                                    value={formData.packageSize}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800 bg-white"
                                >
                                    <option value="">Select size</option>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                    <option value="Extra Large">Extra Large</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Estimated Weight
                                </label>
                                <select
                                    name="estimatedWeight"
                                    value={formData.estimatedWeight}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800 bg-white"
                                >
                                    <option value="">Select weight</option>
                                    <option value="Under 1 kg">Under 1 kg</option>
                                    <option value="1–5 kg">1–5 kg</option>
                                    <option value="5–10 kg">5–10 kg</option>
                                    <option value="10–20 kg">10–20 kg</option>
                                    <option value="20+ kg">20+ kg</option>
                                </select>
                            </div>

                            <div className="sm:col-span-2 lg:col-span-3">
                                <label className="block text-gray-600 text-sm font-medium mb-1">
                                    Package Description
                                </label>
                                <textarea
                                    name="packageDescription"
                                    value={formData.packageDescription}
                                    onChange={handleChange}
                                    rows={2}
                                    placeholder="Briefly describe the contents of your package..."
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition text-sm text-gray-800 resize-y"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Delivery Summary */}
                    <section className="rounded-xl bg-[#102A43] p-4 sm:p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h2 className="text-base font-bold text-white">
                                    Delivery Summary
                                </h2>
                                <p className="mt-1 text-xs text-white/50">
                                    Review your delivery details.
                                </p>
                            </div>

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#f6a611"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <rect x="3" y="7" width="18" height="13" rx="2" />
                                    <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                                    <path d="M3 12h18M10 12v2h4v-2" />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="min-w-0">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                                    Pickup Location
                                </p>
                                <p className="mt-1 break-words text-sm font-medium text-white">
                                    {formData.pickupAddress || "Pickup address will appear here"}
                                </p>
                            </div>

                            <div className="min-w-0">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                                    Delivery Destination
                                </p>
                                <p className="mt-1 break-words text-sm font-medium text-white">
                                    {formData.deliveryAddress || "Delivery address will appear here"}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                                    Package Type
                                </p>
                                <p className="mt-1 text-sm font-medium text-white">
                                    {formData.packageType || "Not selected"}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                                    Estimated Weight
                                </p>
                                <p className="mt-1 text-sm font-medium text-white">
                                    {formData.estimatedWeight || "Not selected"}
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-white/10 pt-4">
                            <div>
                                <p className="text-xs text-white/55">
                                    Estimated Delivery Fee
                                </p>
                                <p className="mt-1 text-2xl font-bold tracking-tight text-[#f6a611]">
                                    ₦10,000.00
                                </p>
                            </div>

                            <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-medium text-white/65">
                                Standard delivery
                            </span>
                        </div>
                    </section>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#f6a611] px-6 py-3 text-sm font-bold text-[#102A43] shadow-sm transition-all duration-200 hover:bg-amber-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#f6a611]/40 focus:ring-offset-2"
                        >
                            Book My Delivery

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>

                        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <rect x="3" y="11" width="18" height="11" rx="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            Your information is secure and used to process your delivery.
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}
