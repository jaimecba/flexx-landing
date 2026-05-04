import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    return NextResponse.json({
        type: "INFORMATION",
        text: `Recebi: ${body.text} 🚀 Integração funcionando`
    });
}