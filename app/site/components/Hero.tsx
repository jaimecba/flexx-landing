import React from 'react';
import { motion } from 'framer-motion';
import VideoCard from './VideoCard';

const Hero: React.FC = () => {
    return (
        <section className="bg-[#FFFFFF] min-h-screen flex items-center py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Coluna esquerda: Conteúdo de texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-[#1C4587] via-[#1C4587]/80 to-[#00D4FF] bg-clip-text text-transparent mb-6 lg:mb-8 leading-tight"
                        >
                            Controle de Ponto Web BioFace
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-[#1A1A1A] text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            Automatize a gestão de jornada de trabalho e reduza riscos trabalhistas.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="https://www.secullum.com.br/arearestrita/novo-cliente?t=3&r=4057&e=flexx@flexxtecnologia.com.br&d=15"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1C4587] hover:bg-[#1A3D75] text-[#FFFFFF] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#00D4FF]/50 focus:ring-offset-2 inline-block text-center"
                                aria-label="Experimente Gratuitamente"
                            >
                                Experimente Gratuitamente
                            </a>
                            <a
                                href="https://www.flexxtecnologia.com.br/pontoweb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-[#1C4587] hover:bg-[#1C4587] hover:text-[#FFFFFF] text-[#1C4587] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#00D4FF]/50 focus:ring-offset-2 inline-block text-center"
                                aria-label="Conhecer Plataforma"
                            >
                                Conhecer Plataforma
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Coluna direita: Vídeo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative order-1 lg:order-2 w-full"
                    >
                        <VideoCard />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;