
"use client"

import Link from "next/link"
import { useState } from "react"
import { X, Menu } from "lucide-react"
import { UserRound } from "lucide-react"
import { signOut, useSession } from "next-auth/react"


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)

    const { data: session, status } = useSession()

    const user = session?.user ?? null
    const authChecked = status !== "loading"

    //    useEffect(() => {
    //         const checkAuth = async () => {
    //             try {
    //                 const response = await fetch(`${API_URL}/api/auth/profile`, {
    //                     method: "GET",
    //                     credentials: "include",
    //                     headers: {
    //                         Accept: "application/json",
    //                     },
    //                 })

    //                 if (!response.ok) {
    //                     setUser(null)
    //                     return
    //                 }

    //                 const data = await response.json()
    //                 console.log('user data received:', data);

    //                 // 👈 Robust fallback: checks data.user first, then falls back to data directly
    //                 const userData = data.user ?? data ?? null;
    //                 setUser(userData);

    //             } catch (error) {
    //                 console.error("Authentication check failed:", error)
    //                 setUser(null)
    //             } finally {
    //                 setAuthChecked(true)
    //             }
    //         }

    //         checkAuth()
    //     }, [])



    const closeMenu = () => {
        setIsOpen(false)
    }


    const handleLogOut = async () => {
        setProfileOpen(false)
        setIsOpen(false)

        try {
            await signOut({
                redirectTo: "/login",
            })
        } catch(error){
            console.error("Logout failed:", error)
        }
        
    }
    return (
        <main className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[white] text-[#14213D]">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <h1 className="text-2xl font-bold tracking-tight text-[#14213D]">
                    Delivo
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden font-bold md:flex items-center gap-6">
                    <Link href="/"
                    >
                        Home
                    </Link>
                    <Link href="/services"
                    >
                        Services
                    </Link>

                    <Link href="/package"
                    >
                        Book a Delivery
                    </Link>
                    <Link href="/contact"
                    >
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center justify-between gap-6 font-bold">

                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setProfileOpen(!profileOpen)}
                            aria-expanded={profileOpen}
                            className="flex items-center justify-center cursor-pointer">
                            <UserRound size={22} />
                        </button>

                        {profileOpen && (
                            <div className="absolute right-0 top-full z-50 mt-3 w-44 rounded-xl border border-gray-200 bg-white py-2 shadow-md">

                                {authChecked && (
                                    user ? (
                                        <>
                                            <Link
                                                href="/my-profile"
                                                onClick={() => setProfileOpen(false)}
                                                className="block px-4 py-3 text-sm font-medium hover:bg-gray-100"
                                            >
                                                My Profile
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={handleLogOut}
                                                className="block w-full px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <Link
                                            href="/login"
                                            onClick={() => setProfileOpen(false)}
                                            className="block px-4 py-3 text-sm font-medium hover:bg-gray-100"
                                        >
                                            Login
                                        </Link>
                                    )
                                )}

                            </div>
                        )}
                    </div>

                    <Link
                        href="/track-delivery"
                        className="bg-[#f6a611] text-white text-base w-full px-4 py-2 rounded-2xl transition-transform hover:scale-105 cursor-pointer"
                    >
                        Track delivery
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        className="items-center justify-center md:hidden"
                    >
                        {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Button */}

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-gray-200 bg-white md:hidden">
                    <div className="flex flex-col px-6 py-4">

                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="border-b border-gray-100 py-4 text-sm font-semibold text-[#14213D] hover:text-[#f6a611]"
                        >
                            Home
                        </Link>

                        <Link
                            href="/services"
                            onClick={closeMenu}
                            className="border-b border-gray-100 py-4 text-sm font-semibold text-[#14213D] hover:text-[#f6a611]"
                        >
                            Services
                        </Link>

                        <Link
                            href="/package"
                            onClick={closeMenu}
                            className="border-b border-gray-100 py-4 text-sm font-semibold text-[#14213D] hover:text-[#f6a611]"
                        >
                            Book a Delivery
                        </Link>

                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="border-b border-gray-100 py-4 text-sm font-semibold text-[#14213D] hover:text-[#f6a611]"
                        >
                            Contact
                        </Link>

                        <Link
                            href="/track-delivery"
                            onClick={closeMenu}
                            className="mt-5 rounded-xl bg-[#f6a611] px-6 py-4 text-center text-sm font-bold text-white transition-colors hover:bg-[#e69b0a]"
                        >
                            Track Delivery
                        </Link>


                        <div className="mt-5 border-t border-gray-200 pt-3">
                            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                My Account
                            </p>

                            {authChecked && (
                                user ? (
                                    <>
                                        <Link
                                            href="/my-profile"
                                            onClick={closeMenu}
                                            className="block py-3 text-sm font-semibold text-[#14213D] hover:text-[#f6a611]"
                                        >
                                            My Profile
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleLogOut}
                                            className="block w-full py-3 text-left text-sm font-semibold text-red-600 hover:text-red-700"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <Link
                                        href="/login"
                                        onClick={closeMenu}
                                        className="block py-3 text-sm font-semibold text-[#14213D] hover:text-[#f6a611]"
                                    >
                                        Login
                                    </Link>
                                )
                            )}
                        </div>


                    </div>
                </div>
            )}


        </main>
    )
}