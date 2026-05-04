import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const auth = req.headers.get("mz-authorization");

        // opcional (segurança)
        if (auth !== "flexx123") {
            return NextResponse.json({
                type: "INFORMATION",
                text: "Não autorizado"
            });
        }

        const body = await req.json();
        const text = String(body?.text || "");

        if (text === "6") {
            return NextResponse.json({
                type: "QUESTION",
                text: "Perfeito! Vamos começar 🚀\n\nQuantos funcionários sua empresa possui?"
            });
        }

        return NextResponse.json({
            type: "INFORMATION",
            text: "Escolha uma opção válida."
        });

    } catch (error) {
        return NextResponse.json({
            type: "INFORMATION",
            text: "Erro na integração."
        });
    }
}