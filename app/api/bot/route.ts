import { NextResponse } from "next/server";

export async function POST() {
    return NextResponse.json({
        type: "INFORMATION",
        text: "FUNCIONOU ✅ Integração ativa"
    });
}