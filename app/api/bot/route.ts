import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        console.log("Payload SMBot:", body);

        return NextResponse.json(
            {
                type: "INFORMATION",
                text: `Recebido: ${body.text}`
            },
            { status: 200 }
        );

    } catch (e) {
        console.error("Erro na integração:", e);

        // SMBot exige SEMPRE JSON 200, mesmo em erro
        return NextResponse.json(
            { type: "INFORMATION", text: "Erro interno ao processar." },
            { status: 200 }
        );
    }
}