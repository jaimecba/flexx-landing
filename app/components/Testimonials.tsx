"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
    image: string;
    text: string;
    companyLogo: string;
    name: string;
    role: string;
    company: string;
    badge: string;
};

const testimonials: Testimonial[] = [
    {
        image: "/clientes/clientea1.png",
        text: "Antes tínhamos retrabalho na folha. Hoje o controle é automático e muito mais confiável.",
        companyLogo: "/logos/empresa1.png",
        name: "Mariana Souza",
        role: "Analista de DP",
        company: "Empresa de Logística",
        badge: "Uso validado na prática",
    },
    {
        image: "/clientes/cliente2.png",
        text: "Eliminamos inconsistências nas horas extras e ganhamos mais segurança nos cálculos.",
        companyLogo: "/logos/empresa2.png",
        name: "Carlos Mendes",
        role: "Gerente de DP",
        company: "Indústria",
        badge: "Acompanhamento realizado",
    },
    {
        image: "/clientes/cliente3.png",
        text: "O fechamento da folha ficou mais rápido e sem surpresas.",
        companyLogo: "/logos/empresa3.png",
        name: "Fernanda Lima",
        role: "Coordenadora de RH",
        company: "Varejo",
        badge: "Uso validado na prática",
    },
    {
        image: "/clientes/cliente4.png",
        text: "Agora temos controle total da jornada e evitamos problemas trabalhistas.",
        companyLogo: "/logos/empresa4.png",
        name: "Issao Kenji",
        role: "Analista de RH",
        company: "Transporte",
        badge: "Acompanhamento realizado",
    },
    {
        image: "/clientes/cliente5.png",
        text: "Reduzimos erros e ganhamos agilidade no fechamento da folha.",
        companyLogo: "/logos/empresa5.png",
        name: "Ana Costa",
        role: "Assistente de DP",
        company: "Comércio",
        badge: "Uso validado na prática",
    },
    {
        image: "/clientes/cliente6.png",
        text: "Hoje temos mais controle sobre horas extras e menos retrabalho.",
        companyLogo: "/logos/empresa6.png",
        name: "Lucas Ferreira",
        role: "RH Generalista",
        company: "Serviços",
        badge: "Acompanhamento realizado",
    },
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const interval = setInterval(() => {
            if (isPaused) return;
            const card = container.firstElementChild as HTMLElement;
            if (!card) return;

            const gap = 24;
            const scrollAmount = card.offsetWidth + gap;

            // move o carrossel
            if (
                container.scrollLeft + container.clientWidth >=
                container.scrollWidth - 10
            ) {
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }

            // calcula qual card está no centro
            const centerPosition = container.scrollLeft + container.clientWidth / 2;
            const newIndex = Math.round(centerPosition / scrollAmount);

            setActiveIndex(newIndex % testimonials.length);

            if (!card) return;


            if (
                container.scrollLeft + container.clientWidth >=
                container.scrollWidth - 10
            ) {
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }, 3500);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* TÍTULO */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 leading-tight">
                        Resultados reais com acompanhamento próximo{" "}
                        <span className="font-normal text-gray-500 block md:inline text-[0.8em]">
                            — presencialmente ou online, garantindo mais segurança e eficiência no RH e DP.
                        </span>
                    </h2>
                </div>

                {/* CARROSSEL */}
                <div className="relative">

                    {/* Fade lateral */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10" />

                    <div
                        ref={containerRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                        className="
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            px-2 pb-6
            scrollbar-hide
          "
                    >
                        {testimonials.map((item, index) => (
                            <article
                                key={index}
                                className={`
    snap-start
    flex-shrink-0
    w-[85%]
    sm:w-[65%]
    md:w-[48%]
    lg:w-[32%]
    rounded-2xl
    bg-white
    border border-gray-100
    shadow-md
    transition-all duration-500
    overflow-hidden
    ${index === activeIndex
                                        ? "scale-100 opacity-100 shadow-xl border-blue-200"
                                        : "scale-95 opacity-70"
                                    }
    hover:shadow-xl hover:-translate-y-1
  `}
                            >

                                {/* IMAGEM PREMIUM */}
                                <div className="relative w-full h-44 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={`Cliente ${item.name}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover object-top"
                                    />

                                    {/* OVERLAY SUAVE (premium feel) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* CONTEÚDO */}
                                <div className="p-6">

                                    {/* DEPOIMENTO */}
                                    <blockquote className="text-[15px] font-semibold text-gray-900 leading-relaxed mb-5">
                                        “{item.text}”
                                    </blockquote>

                                    {/* LOGO EMPRESA */}
                                    <div className="mb-3 flex items-center gap-2">
                                        <Image
                                            src={item.companyLogo}
                                            alt={item.company}
                                            width={140}
                                            height={44}
                                            className="h-10 w-auto object-contain opacity-90"
                                        />
                                    </div>

                                    {/* IDENTIDADE */}
                                    <div className="mb-3">
                                        <p className="font-semibold text-gray-900">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.role}</p>
                                        <p className="text-xs text-gray-400">{item.company}</p>
                                    </div>

                                    {/* PROVA */}
                                    <div className="text-xs text-emerald-700 font-medium">
                                        ✔ {item.badge}
                                    </div>

                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* PROGRESS BAR */}
                <div className="mt-6 max-w-4xl mx-auto px-4">
                    <div className="h-[3px] w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-600 transition-all duration-500 ease-out"
                            style={{
                                width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}