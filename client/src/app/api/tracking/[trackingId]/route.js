
import { auth } from "@/auth";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const INTERNAL_API_SECRET = process.env.INTERNAL_API_SECRET;

export async function GET(request, { params }) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json(
                { message: "Please log in to track your order" },
                { status: 401 }
            );
        }

        if (!API_URL || !INTERNAL_API_SECRET) {
            return NextResponse.json(
                { message: "Server configuration error" },
                { status: 500 }
            );
        }

        const { trackingId } = await params;

        const response = await fetch(
            `${API_URL.replace(/\/+$/, "")}/api/tracking/internal/orders/${encodeURIComponent(trackingId)}/tracking`,
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
        console.error("Tracking route error:", error);

        return NextResponse.json(
            { message: "Failed to retrieve tracking information" },
            { status: 500 }
        );
    }
}
