import API_URL from "@/lib/api"
import { NextResponse } from "next/server";

export async function POST(req) {
    const { email, password } = await req.json();

    //guard
    if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    try {
        const response = await fetch(`${API_URL}/api/auth/login`, {
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

        if (!response.ok) {
            return NextResponse.json({ error: "Email or password are incorrect" }, { status: 400 });
        }
        //

        const token = data?.token;

        console.log('response.data',data.token);
        

        if (!token) {
            return NextResponse.json({ error: "Login result malfunctioned. Please try again later" }, { status: 400 });
        }

        const result = NextResponse.json({ success: true });

        result.cookies.set('jwt', token, {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
            maxage: 36000,
            secure: true
        });

        return result;


    } catch (error) {
        console.error("Logout error:", error)
        return NextResponse.json({ error: "Could not complete action. Please try again later" }, { status: 400 });
    }
}