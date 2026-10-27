
import { auth } from "@/auth";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const INTERNAL_API_SECRET = process.env.INTERNAL_API_SECRET;

export async function POST(request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: "Please log in to book a delivery" },
        { status: 401 }
      );
    }

    if (!API_URL || !INTERNAL_API_SECRET) {
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const response = await fetch(
      `${API_URL.replace(/\/+$/, "")}/api/orders/internal`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-internal-api-secret": INTERNAL_API_SECRET,
          "x-user-id": session.user.id,
        },
        body: JSON.stringify(body),
        cache: "no-store",
      }
    );

    const responseText = await response.text();

console.log("Express booking status:", response.status);
console.log(
  "Express booking content type:",
  response.headers.get("content-type")
);
console.log("Express booking response:", responseText.slice(0, 500));

let data;

try {
  data = JSON.parse(responseText);
} catch {
  return NextResponse.json(
    {
      message: "Express returned HTML instead of JSON",
      upstreamStatus: response.status,
    },
    { status: 502 }
  );
}



    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Create order route error:", error);

    return NextResponse.json(
      { message: "Something went wrong while booking your delivery" },
      { status: 500 }
    );
  }
}
