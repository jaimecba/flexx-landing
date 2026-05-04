import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const text = String(body?.text || "");

        // 🔥 quando usuário digita 6
        if (text === "6") {
            return NextResponse.json({
                type: "QUESTION",
                text: "Perfeito! Vamos começar 🚀\n\nQuantos funcionários sua empresa possui?"
            });
        }

        // 🔥 fallback
        return NextResponse.json({
            type: "INFORMATION",
            text: "Escolha uma opção do menu."
        });

    } catch (error) {
        return NextResponse.json({
            type: "INFORMATION",
            text: "Erro na integração. Tente novamente."
        });
    }
}