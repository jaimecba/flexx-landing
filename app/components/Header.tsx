import React from 'react';
import Image from 'next/image';
import Container from "./Container";

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
            <Container>
                <div className="flex flex-col lg:flex-row items-center justify-between py-4 md:py-6 gap-6 lg:gap-0">
                    <div className="flex items-center space-x-4 flex-shrink-0">
                        <Image
                            src="/logo_flexx.jpg"
                            alt="Logo Flexx"
                            width={140}
                            height={50}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                        <Image
                            src="/logo_secullum_pv.jpg"
                            alt="Logo Secullum"
                            width={150}
                            height={50}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </div>
                    <a
                        href="https://wa.me/5565992367994?text=Quero%20uma%20demonstra%C3%A7%C3%A3o%20do%20PontoWeb%20Secullum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-green-500/40 focus:outline-none focus:ring-4 focus:ring-green-500/50 whitespace-nowrap flex-shrink-0"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 group-hover:scale-110 transition-transform"
                        >
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 2.15 2.15 0 0 1-1.7 1.2l-2.3.3a7.92 7.92 0 0 1-1.5-.3 2 2 0 0 1-1.1-.8l-1.9-1.9a2 2 0 0 1-.7-1.2l-.3-2a2.65 2.65 0 0 1 .8-2 7.5 7.5 0 0 1 3.5-1.6l.3-.1a2.7 2.7 0 0 1 2.1.5 2.1 2.1 0 0 1 .9 1.7 2.6 2.6 0 0 1-.1 1.3z" />
                            <path d="M15.7 11.1a.5.5 0 0 1 .4-.5h2.5" />
                            <path d="m17.2 10 1.7-1.7" />
                            <path d="M20.5 15l-1.7-1.7" />
                            <path d="m17.2 18 1.7 1.7" />
                            <path d="m14.5 20.5 1.7-1.7" />
                            <circle cx="9" cy="7" r="2" />
                        </svg>
                        Fale pelo WhatsApp
                    </a>
                </div>
            </Container>
        </header>
    );
};

export default Header;
