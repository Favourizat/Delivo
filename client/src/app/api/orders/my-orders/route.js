
import { auth } from "@/auth";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const INTERNAL_API_SECRET = process.env.INTERNAL_API_SECRET;

export async function GET() {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        if (!API_URL || !INTERNAL_API_SECRET) {
            console.error("Missing API URL or internal API secret");

            return NextResponse.json(
                { message: "Server configuration error" },
                { status: 500 }
            );
        }

        const response = await fetch(
            `${API_URL.replace(/\/+$/, "")}/api/orders/internal/my-orders`,
            {
                method: "GET",
                headers: {
                    "x-internal-api-secret": INTERNAL_API_SECRET,
                    "x-user-id": session.user.id,
                },
                cache: "no-store",
            }
        );

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status,
        });
    } catch (error) {
        console.error("My orders route error:", error);

        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
