import type { Config } from "tailwindcss";

export default {
    __compat: {
        layer: "deprecated",
    },
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-green": "#00B37E",
                "brand-greenDark": "#00885F",
            },
        },
    },
    plugins: [],
} satisfies Config;