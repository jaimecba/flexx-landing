import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EXTERNAL_LINKS } from "../../config/links";


const Hero2: React.FC = () => {
    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
            {/* Glow de fundo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute right-[-100px] top-[100px] w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-20"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">


                    {/* TEXTO */}
                    <div className="lg:pr-12">

                        {/* Qualificador */}
                        <p className="text-sm text-blue-600 font-semibold mb-3">

                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 leading-tight mb-6">
                            Controle de ponto antifraude com reconhecimento facial

                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                            Reduza erros e evite passivos trabalhistas
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">

                            {/* BOTÃO PRINCIPAL */}
                            <a
                                href="https://wa.me/556521294584?text=6"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-5 px-8 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center"
                            >
                                Testar grátis agora
                            </a>

                            {/* BOTÃO SECUNDÁRIO — DEMONSTRAÇÃO INTERATIVA */}
                            <a
                                href={EXTERNAL_LINKS.pontoWebDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
        group
        w-full sm:w-auto
        flex items-center justify-center gap-3
        border-2 border-blue-600
        text-blue-700
        font-semibold
        py-5 px-8
        rounded-2xl
        text-lg
        bg-white
        shadow-md
        hover:bg-blue-50
        hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300
    "
                            >
                                {/* ÍCONE PLAY COM EFEITO DE PULSO */}
                                <span className="relative flex items-center justify-center">
                                    <span className="
            absolute
            w-9 h-9
            rounded-full
            bg-blue-400
            opacity-30
            animate-ping
        "></span>

                                    <span className="
            relative
            flex items-center justify-center
            w-9 h-9
            rounded-full
            bg-blue-600
            text-white
            shadow-md
            group-hover:scale-110
            transition-transform duration-300
        ">
                                        ▶
                                    </span>
                                </span>

                                <span>Ver Demonstração Interativa</span>
                            </a>

                        </div>

                        {/* Prova / redução de fricção */}
                        <div className="text-sm text-gray-500 space-y-1">
                            <p>✔ Implantação assistida</p>
                            <p>✔ Suporte especializado</p>
                            <p>✔ Sem burocracia</p>
                        </div>

                    </div>

                    {/* IMAGEM */}
                    <div className="relative lg:pl-12">

                        {/* LOGO FLEXX */}
                        <Image
                            src="/images/logos/flexx-logo.png"
                            alt="Flexx"
                            width={140}
                            height={40}
                            style={{ width: "auto", height: "100%" }}
                        />

                        {/* CARD IMAGEM */}
                        <div className="relative w-full aspect-[16/9] bg-white rounded-3xl overflow-hidden shadow-2xl">

                            <Image
                                src="/images/hero/dashboard.png"
                                alt="Sistema de controle de ponto"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />

                            {/* SELO */}
                            <div className="
                                absolute 
                                bottom-4 left-1/2 -translate-x-1/2
                                bg-emerald-600 
                                text-white 
                                px-4 py-2.5 
                                rounded-xl 
                                shadow-lg 
                                text-xs 
                                font-semibold 
                                z-20
                            ">
                                <div className="text-sm leading-tight">
                                    A partir de R$49,90/mês
                                </div>

                                <div className="text-[11px] opacity-90">
                                    Oferta por tempo limitado
                                </div>
                            </div>

                        </div>

                        {/* LOGOS */}
                        <div className="
  mt-6 
  flex 
  flex-col 
  sm:flex-row 
  items-start 
  sm:items-center 
  gap-4 
  sm:gap-8 
  text-sm text-gray-500
">

                            {/* SECULLUM */}
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <div style={{ height: "28px", minWidth: "90px" }}>
                                    <Image
                                        src="/images/logos/secullum.png"
                                        alt="Secullum"
                                        width={120}
                                        height={40}
                                        style={{ width: "auto", height: "100%" }}
                                    />
                                </div>
                                <span className="whitespace-nowrap">Sistema oficial</span>
                            </div>

                            {/* FLEXX */}
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <div style={{ height: "36px", minWidth: "110px" }}>
                                    <Image
                                        src="/images/logos/flexx-horizontal_sf.png"
                                        alt="Flexx"
                                        width={140}
                                        height={40}
                                        style={{ width: "auto", height: "100%" }}
                                    />
                                </div>
                                <span className="whitespace-nowrap">Channel Partner</span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero2;