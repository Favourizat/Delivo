
"use client"


import { useState } from "react"
import { useRouter } from "next/navigation"
import API_URL from "@/lib/api"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const router = useRouter()


    const handleLogout = async () => {
        try {
            const response = await fetch(
                `${API_URL}/api/auth/logout`,
                {
                    method: "POST",
                    credentials: "include",
                }
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Logout failed")
            }

            // Redirect to the login page
            router.push("/")

        } catch (error) {
            console.error("Logout error:", error)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        setError("")

        try {

            const API_URL = process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, "")

            const response = await fetch(
                `${API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password,
                })
            })


            const data = await response.json();

            console.log('data', data);


            if (!response.ok) {
                console.error("Login failed:", data.message)
                throw new Error(data.message || "Login failed")
            }

            console.log("Login successful:", data)

            window.dispatchEvent(new Event("authChange"))
            router.refresh()
            router.push("/")
        } catch (error) {
            console.error("Login request failed:", error)
            setError(error.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4 py-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">

                {/* Heading */}
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Login
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="w-full"
                >
                    {/* Email */}
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block text-gray-600 text-sm font-medium mb-1"
                        >
                            Email Address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block text-gray-600 text-sm font-medium mb-1"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400 transition"
                        />
                    </div>

                    {error && (
                    <p className="text-sm text-red-500" role="alert">
                        {error}
                    </p>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition duration-200 cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-4">
                        <div className="h-px flex-1 bg-gray-300" />

                        <span className="text-sm text-gray-400">
                            Or
                        </span>

                        <div className="h-px flex-1 bg-gray-300" />
                    </div>

                    {/* Google Sign In */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white text-gray-700 py-3 rounded-md font-medium hover:bg-gray-50 hover:border-gray-400 focus:ring-2 focus:ring-blue-200 transition duration-200 cursor-pointer"
                    >
                        Continue with Google
                    </button>

                    {/* Register Link */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don&apos;t have an account?{" "}
                        <a
                            href="/register"
                            className="font-medium text-blue-600 hover:text-blue-800 transition"
                        >
                            Create an account
                        </a>
                    </p>

                    {/* Logout */}
                    <div className="mt-5 text-center border-t border-gray-200 pt-4">
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="text-sm text-gray-500 hover:text-blue-600 transition cursor-pointer"
                        >
                            Logout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}