import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const text = body?.text?.toUpperCase() || "";

    // 🔥 RESPOSTA BASE
    return NextResponse.json({
        type: "MENU",
        text: "Perfeito! Vamos te ajudar 👇\n\nEscolha uma opção:",
        items: [
            {
                number: 1,
                text: "Quero testar o sistema",
                callback: {
                    endpoint: "https://flexxtecnologia.com.br/api/bot",
                    data: { step: "teste" }
                }
            },
            {
                number: 2,
                text: "Quero ver uma demonstração",
                callback: {
                    endpoint: "https://flexxtecnologia.com.br/api/bot",
                    data: { step: "demo" }
                }
            },
            {
                number: 3,
                text: "Falar com especialista",
                callback: {
                    endpoint: "https://flexxtecnologia.com.br/api/bot",
                    data: { step: "vendas" }
                }
            }
        ]
    });
}