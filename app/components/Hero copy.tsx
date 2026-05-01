'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-50/50 flex items-center py-20 px-4 lg:px-8"
        >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Coluna esquerda */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 lg:space-y-10"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-snug"
                    >
                        Controle de ponto antifraude
                        <br className="hidden lg:block" />
                        <span className="block lg:inline">com reconhecimento facial seguro em tempo real</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium max-w-lg leading-relaxed"
                    >
                        Elimine fraudes e garanta registros precisos com validação facial, auditoria automática e total conformidade.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:from-blue-700 hover:to-blue-800"
                        >
                            Solicitar Demonstração
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-5 bg-white/70 backdrop-blur-sm border-2 border-blue-200/50 text-blue-800 font-semibold text-lg rounded-2xl shadow-xl hover:shadow-xl hover:border-blue-300/50 hover:bg-white/90 transition-all duration-300"
                        >
                            Falar com Especialista
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Coluna direita (CARD) */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/40 backdrop-blur-3xl rounded-3xl p-6 lg:p-12 border border-white/50 shadow-2xl relative overflow-hidden max-w-[480px] mx-auto lg:mx-0"
                        style={{
                            background:
                                'linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)',
                        }}
                    >
                        <Image
                            src="/images/hero-card.png"
                            alt="Cartão antifraude técnica"
                            width={600}
                            height={700}
                            className="w-full h-auto rounded-2xl shadow-2xl drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}