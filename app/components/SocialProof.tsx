'use client'

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const testimonials = [
    {
        quote: "Transformou completamente minha abordagem ao trabalho. Recomendo!",
        author: "Maria Silva",
        role: "CEO, TechCorp",
    },
    {
        quote: "Resultados incríveis em pouco tempo. Plataforma essencial.",
        author: "João Santos",
        role: "Desenvolvedor, Innovate",
    },
    {
        quote: "Melhor investimento para o crescimento profissional.",
        author: "Ana Oliveira",
        role: "Gerente, FutureLabs",
    },
];

const SocialProof: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-center mb-16"
                    variants={itemVariants}
                >
                    O que nossos clientes dizem
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm border border-gray-100/50 rounded-3xl shadow-xl hover:shadow-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={itemVariants}
                            transition={{ delay: index * 0.1 }}
                        >
                            <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed italic">“{testimonial.quote}”</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mr-4 flex-shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default SocialProof;