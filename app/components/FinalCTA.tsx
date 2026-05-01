'use client'

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const FinalCTA: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >

                <motion.h2
                    className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent mb-8"
                    variants={itemVariants}
                >
                    Pronto para começar?
                </motion.h2>

                <motion.p
                    className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    Junte-se a milhares de profissionais que estão transformando suas carreiras com nossa plataforma inovadora.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    variants={itemVariants}
                >

                    <motion.div className="flex flex-col sm:flex-row gap-4">

                        {/* BOTÃO PRINCIPAL */}
                        <motion.a
                            href="https://revenda.secullum.com.br/novo-cliente?t=3&r=4057&e=flexx@flexxtecnologia.com.br&d=15"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 text-lg font-semibold text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Começar Agora
                        </motion.a>

                        {/* BOTÃO SECUNDÁRIO */}
                        <motion.a
                            href="#benefits"
                            className="px-8 py-4 text-lg font-semibold bg-white/50 backdrop-blur-sm border border-gray-200 text-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Saiba Mais
                        </motion.a>

                    </motion.div>

                </motion.div> {/* FECHAMENTO QUE FALTAVA */}

            </motion.div>

        </section>
    );
};

export default FinalCTA;