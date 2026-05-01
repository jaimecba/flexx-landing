'use client';

import { motion } from 'framer-motion';

// ÍCONES LOCAIS (padronizados como Benefits e Metrics)
import {
    TempoIcon,
    PrejuizoIcon,
    JuridicoIcon,
    GargalosIcon,
    DadosIcon,
    IntegracaoIcon
} from "@/app/components/icons";

type Feature = {
    icon: React.FC<{ className?: string }>;
    title: string;
    description: string;
};

const features: Feature[] = [
    {
        icon: TempoIcon,
        title: 'Pare de desperdiçar horas com tarefas operacionais',
        description:
            'Controle manual consome tempo e energia do RH/DP. Automatize agora e foque no que realmente gera valor.',
    },
    {
        icon: PrejuizoIcon,
        title: 'Evite prejuízos silenciosos na folha de pagamento',
        description:
            'Erros em horas extras, adicionais e cálculos manuais geram custos desnecessários todos os meses..',
    },
    {
        icon: JuridicoIcon,
        title: 'Reduza o risco de processos trabalhistas',
        description:
            'Sem um controle confiável, sua empresa fica vulnerável. Garanta registros seguros e conformidade com a legislação.',
    },
    {
        icon: GargalosIcon,
        title: 'Elimine retrabalho e gargalos no dia a dia',
        description:
            'Ajustes manuais, conferências e correções constantes atrasam toda a operação. Simplifique tudo em poucos cliques.',
    },
    {
        icon: DadosIcon,
        title: 'Tenha controle total com dados em tempo real',
        description:
            'Sem visibilidade, não há gestão. Acompanhe jornadas, atrasos e horas extras com precisão e rapidez.',
    },
    {
        icon: IntegracaoIcon,
        title: 'Integre tudo sem dor de cabeça',
        description:
            'Chega de sistemas isolados. Conecte facilmente com relógios de ponto e centralize a gestão em um único lugar.',
    },
];

export default function Features() {
    return (
        <section className="py-24 lg:py-32 bg-white" id="features">
            <div className="container px-4 mx-auto">

                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight">
                        Sua empresa ainda perde dinheiro e corre riscos com controle de ponto manual?
                    </h2>
                </motion.div>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-600 mx-auto mb-20 text-center max-w-[60ch] md:max-w-[80ch] lg:max-w-[90ch]"
                >
                    Processos manuais escondem erros, custos e riscos trabalhistas no seu dia a dia.
                </motion.p>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white border border-gray-200/60 shadow-sm hover:shadow-lg rounded-3xl p-8 cursor-pointer group hover:scale-[1.02] transition-all duration-300"
                        >

                            {/* ÍCONE — MESMO PADRÃO BENEFITS & METRICS */}
                            <motion.div
                                className="w-20 h-20 md:w-24 md:h-24 bg-transparent rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                            >
                                <feature.icon
                                    className="w-18 h-18 md:w-24 md:h-24 object-contain drop-shadow-md transition-all duration-300"
                                />
                            </motion.div>

                            {/* Título */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Descrição */}
                            <p className="text-gray-600 text-center leading-relaxed">
                                {feature.description}
                            </p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}