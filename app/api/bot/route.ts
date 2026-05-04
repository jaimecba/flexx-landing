import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const text = body?.text?.toUpperCase() || "";

    // 🔥 FLUXO TESTE (lead quente)
    if (text.includes("TESTE")) {
        return NextResponse.json({
            type: "QUESTION",
            text: "Perfeito! Vamos começar 🚀\n\nQuantos funcionários sua empresa possui?"
        });
    }

    // 🔥 FLUXO DEMO (lead médio)
    if (text.includes("DEMO")) {
        return NextResponse.json({
            type: "INFORMATION",
            text: "Aqui vai uma visão rápida do sistema 👇\n\n✔ Controle automático\n✔ Antifraude com reconhecimento facial\n✔ Integração com eSocial\n\nQuer testar agora ou falar com especialista?"
        });
    }

    // 🔥 PADRÃO (menu)
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