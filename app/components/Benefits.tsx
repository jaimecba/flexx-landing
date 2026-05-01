'use client';

import React from 'react';
import { motion } from 'framer-motion';

import {
    FacialIcon,
    AssinaturaIcon,
    GraficoIcon,
    DashboardIcon,
    CalculadoraIcon,
    AplicativoIcon
} from "@/app/components/icons";

type Benefit = {
    icon: React.FC<{ className?: string }>;
    title: string;
    description: string;
};

const benefits: Benefit[] = [
    {
        icon: FacialIcon,
        title: 'Reconhecimento facial',
        description:
            'Registro de ponto rápido, seguro e antifraude, com reconhecimento facial que bloqueia marcações indevidas e garante total precisão na jornada da sua equipe.'
    },
    {
        icon: AssinaturaIcon,
        title: 'Assinatura eletrônica do cartão ponto',
        description:
            'Assine o cartão de ponto digitalmente, com validade jurídica e sem papelada.'
    },
    {
        icon: GraficoIcon,
        title: 'Indicadores para colaboradores',
        description:
            'Banco de horas e horas extras sempre atualizados, com total visibilidade para o RH.'
    },
    {
        icon: DashboardIcon,
        title: 'Dashboard gerencial',
        description:
            'Transforme dados da jornada em insights estratégicos para gestão de pessoas e folha.'
    },
    {
        icon: CalculadoraIcon,
        title: 'Detalhamento de cálculos',
        description:
            'Tenha acesso ao detalhamento completo de cada cálculo, com precisão e segurança para auditorias.'
    },
    {
        icon: AplicativoIcon,
        title: 'Ponto e Gestão pelo celular',
        description:
            'Registre e controle jornadas em tempo real, com geolocalização e recursos avançados de segurança.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Benefits: React.FC = () => {
    return (
        <section id="benefits" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">

                <motion.div
                    className="text-center mb-20"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent mb-6"
                    >''
                        Recursos
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed"
                    >
                        Descubra como nossa solução transforma a gestão de ponto e jornada de trabalho.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="
                                group
                                bg-white
                                rounded-3xl
                                p-8 md:p-10
                                shadow-lg
                                transition-all duration-500
                                border border-gray-100

                                hover:bg-brand-green
                                hover:bg-brand-green-dark
                                hover:border-brand-green-dark

                                hover:shadow-2xl
                                hover:-translate-y-2
                            "
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-transparent rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <benefit.icon className="w-18 h-18 md:w-24 md:h-24 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center leading-tight group-hover:text-blue-600 transition-colors duration-300">
                                {benefit.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-center text-base md:text-lg px-4">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Benefits;