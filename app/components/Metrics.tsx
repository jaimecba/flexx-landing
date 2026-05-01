"use client";

import React, { useEffect } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';

// ÍCONES LOCAIS — MESMO PADRÃO DO BENEFITS
import {
    PessoasIcon,
    AvaliacaoIcon,
    RecomendacaoIcon,
    ExperienciaIcon,
    AtendimentoIcon,
    BrasilIcon
} from "@/app/components/icons";

type Metric = {
    icon: React.FC<{ className?: string }>;
    title: string;
    value: number;
    decimalPlaces?: number;
    description: string;
    prefix?: string;
    suffix?: string;
};

const metrics: Metric[] = [
    {
        icon: PessoasIcon,
        title: "Pessoas que utilizam nossos sistemas",
        value: 7000000,
        description: "milhões de usuários atendidos em todo o Brasil",
        suffix: " +",
    },
    {
        icon: AvaliacaoIcon,
        title: "Alta avaliação nas lojas de aplicativos",
        value: 4.8,
        decimalPlaces: 1,
        description: "Avaliação média nas lojas de aplicativos, refletindo a qualidade e confiança no uso diário.",
        suffix: "/5",
    },
    {
        icon: RecomendacaoIcon,
        title: "Quem usa, confia e recomenda",
        value: 96,
        description: "Resultado de pesquisas realizadas diretamente na plataforma, com feedbacks reais de quem utiliza no dia a dia",
        suffix: "%",
    },
    {
        icon: ExperienciaIcon,
        title: "Anos de Experiência",
        value: 25,
        description: "Mais de duas décadas ajudando empresas a reduzir riscos e otimizar processos de RH.",
        suffix: " +",
    },
    {
        icon: AtendimentoIcon,
        title: "Atendimento Humanizado",
        value: 0,
        description: "Você fala com pessoas de verdade, prontas para resolver com agilidade",
    },
    {
        icon: BrasilIcon,
        title: "Tecnologia Presente no Brasil",
        value: 0,
        description: "Soluções utilizadas diariamente por empresas em diferentes segmentos e regiões",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const metricVariants = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6, ease: "easeOut"
        },
    }
};

const iconVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
    },
};

function AnimatedCounter({
    target,
    prefix = '',
    suffix = '',
    duration = 2,
    decimalPlaces = 0,
}: {
    target: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    decimalPlaces?: number;
}) {
    const count = useMotionValue(0);

    const displayValue = useTransform(count, (value: number) => {
        const formatted = value.toFixed(decimalPlaces);
        return `${prefix}${formatted}${suffix}`;
    });

    useEffect(() => {
        const animation = animate(count, target, { duration });
        return () => animation.stop();
    }, [count, target, duration]);

    return (
        <motion.div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300 leading-tight">
            {displayValue}
        </motion.div>
    );
}

const Metrics: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 lg:px-8">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-8 lg:mb-20 text-blue-700 tracking-tight"
                >
                    Secullum - Líder em controle de ponto na América Latina
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px 0px' }}
                >
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl rounded-3xl p-8 lg:p-10 border border-white/30 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center h-full hover:border-blue-200/50"
                            variants={metricVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                className="w-20 h-20 md:w-24 md:h-24 bg-transparent rounded-2xl flex items-center justify-center mb-6 lg:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300"
                                variants={iconVariants}
                            >
                                <metric.icon
                                    className="w-18 h-18 md:w-24 md:h-24 object-contain drop-shadow-md transition-all duration-300"
                                />
                            </motion.div>

                            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-4 lg:mb-6 leading-tight">
                                {metric.title}
                            </h3>

                            {index >= 4 ? (
                                <div className="h-10"></div>
                            ) : (
                                <AnimatedCounter
                                    target={metric.value}
                                    prefix={metric.prefix}
                                    suffix={metric.suffix}
                                    decimalPlaces={metric.decimalPlaces}
                                />
                            )}

                            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mt-4 lg:mt-6 font-medium">
                                {metric.description}
                            </p>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Metrics;