import NexthAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const API_URL =
    process.env.NEXT_PUBLIC_API_URL

export const { handlers, signIn, signOut, auth } = NexthAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                pasword: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                if (!API_URL) {
                    throw new Error("API URL is not configured")
                }

                const email = credentials?.email
                const password = credentials?.password

                if (
                    typeof email !== "string" ||
                    typeof password !== "string" ||
                    !email.trim() ||
                    !password
                ) {
                    return null
                }

                const response = await fetch(
                    `${API_URL.replace(/\/+$/, "")}/api/auth/login`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email,
                            password,
                        }),
                        cache: "no-store",
                    }
                )

                if (response.status === 401) {
                    return null
                }

                if (!response.ok) {
                    throw new Error("Authentication service unavailable")
                }

                const data = await response.json()
                const user = data.user

                if (!user?.id || !user?.email) {
                    return null
                }

                return {
                    id: String(user.id),
                    name: user.name ?? null,
                    email: user.email,
                }
            }
        })
    ],

    session: {
        strategy: "jwt",
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }

            return token
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id
            }

            return session
        }
    }

})