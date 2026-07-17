export const EXTERNAL_LINKS = {
    /**
     * Demonstração Interativa Oficial do Ponto Web
     *
     * Abre diretamente a jornada de demonstração.
     * O parâmetro "phone" é utilizado pela experiência GetDemo
     * para o contato posterior com a Flexx.
     */
    pontoWebDemo:
        "https://app.getdemo.com.br/s/371a1b4b-fb47-4fb8-b035-af68783eb874?phone=5565992367994&text=Ol%C3%A1%21+Vim+pela+demonstra%C3%A7%C3%A3o+interativa+do+Ponto+Web+e+gostaria+de+falar+com+um+especialista+da+Flexx.&utm_source=chatgpt.com",
} as const;

export type ExternalLinkKey = keyof typeof EXTERNAL_LINKS;