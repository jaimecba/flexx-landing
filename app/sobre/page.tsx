'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type TimelineItem = {
    year: string;
    title: string;
    desc: string;
};

type Value = {
    icon: string;
    title: string;
    desc: string;
};

type Stat = {
    number: string;
    label: string;
    icon: string;
};

type Faq = {
    question: string;
    answer: string;
};

const timeline: TimelineItem[] = [
    {
        year: '2001',
        title: 'Fundação da Flexx',
        desc: 'Iniciamos nossa jornada com a visão de transformar desafios em oportunidades, focando em soluções inovadoras.',
    },
    {
        year: '2004',
        title: 'Primeira Expansão',
        desc: 'Lançamos nossa primeira linha de produtos nacionais, atendendo clientes em todo o Brasil.',
    },
    {
        year: '2006',
        title: 'Crescimento Acelerado',
        desc: 'Abertura de novas unidades e certificações que solidificaram nossa presença no mercado.',
    },
    {
        year: 'Hoje',
        title: 'Líderes de Mercado',
        desc: 'Mais de 20 anos de excelência, com parcerias estratégicas e inovação contínua.',
    },
];

const values: Value[] = [
    { icon: '🚀', title: 'Inovação', desc: 'Sempre à frente com tecnologias de ponta.' },
    { icon: '🤝', title: 'Integridade', desc: 'Compromisso absoluto com a ética e transparência.' },
    { icon: '⭐', title: 'Excelência', desc: 'Qualidade superior em todos os serviços.' },
    { icon: '👥', title: 'Colaboração', desc: 'Trabalhamos em equipe para resultados incríveis.' },
    { icon: '🌿', title: 'Sustentabilidade', desc: 'Práticas responsáveis pelo futuro.' },
];

const stats: Stat[] = [
    { number: '23+', label: 'Anos de Experiência', icon: '📅' },
    { number: '500+', label: 'Clientes Satisfeitos', icon: '👨‍👩‍👧‍👦' },
    { number: '99%', label: 'Taxa de Sucesso', icon: '✅' },
    { number: '50+', label: 'Prêmios Recebidos', icon: '🏆' },
];

const faqs: Faq[] = [
    {
        question: 'O que a Flexx oferece?',
        answer: 'Soluções inovadoras em tecnologia e consultoria, personalizadas para o seu negócio.',
    },
    {
        question: 'Como funciona a parceria com Secullum?',
        answer: 'Integração total de sistemas para eficiência máxima e compliance.',
    },
    {
        question: 'Vocês atendem todo o Brasil?',
        answer: 'Sim, com suporte nacional e equipe dedicada.',
    },
    {
        question: 'Qual o tempo de implementação?',
        answer: 'Projetos personalizados, geralmente de 30 a 90 dias.',
    },
];

export default function SobrePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 text-gray-800">
            {/* Seção 1: Abertura Inspiradora */}
            <section className="py-24 px-4 sm:px-6 lg:px-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h1
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#1C4587] to-blue-800 bg-clip-text text-transparent mb-8"
                    >
                        Sobre a Flexx
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto"
                    >
                        Desde 2001, transformamos desafios em oportunidades. Somos pioneiros em inovação,
                        com paixão por resultados que impactam vidas e negócios.
                    </motion.p>
                </motion.div>
            </section>

            {/* Seção 2: Timeline */}
            <section className="py-24 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-[#1C4587] text-center mb-24"
                >
                    Nossa Jornada
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto relative"
                >
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1C4587]/50 to-blue-500/30 z-0" />
                    {timeline.map((item, index) => (
                        <motion.div
                            key={item.year}
                            variants={itemVariants}
                            className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''} mb-24 items-center relative z-10`}
                        >
                            <div className="w-full sm:w-5/12 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#1C4587]/20 hover:shadow-2xl transition-all duration-300">
                                <div className="text-4xl font-bold text-[#1C4587] mb-4">{item.year}</div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                            <div className="w-20 h-20 bg-[#1C4587] rounded-full flex items-center justify-center text-2xl text-white font-bold mx-8 sm:mx-0 mb-8 sm:mb-0 shadow-lg">
                                {index + 1}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Seção 3: Parceria Secullum */}
            <section className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-[#1C4587]/5 to-blue-100">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={itemVariants}>
                            <div className="text-5xl mb-6">🤝</div>
                            <h2 className="text-4xl font-bold text-[#1C4587] mb-6">Parceria Estratégica com Secullum</h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Juntos, Flexx e Secullum oferecem soluções integradas de tecnologia e compliance,
                                garantindo eficiência, segurança e conformidade para empresas de todos os tamanhos.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="relative">
                            <div className="bg-gradient-to-br from-[#1C4587] to-blue-800 p-12 rounded-3xl shadow-2xl text-white">
                                <div className="text-6xl mb-8">🔗</div>
                                <h3 className="text-3xl font-bold mb-4">Sinergia Total</h3>
                                <p className="text-xl opacity-90">Mais de 18 anos de colaboração bem-sucedida.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Seção 4: 5 Valores */}
            <section className="py-24 px-4 sm:px-6 lg:px-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-[#1C4587] text-center mb-20"
                >
                    Nossos 5 Valores
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-[#1C4587]/30 transition-all duration-300 text-center h-full"
                        >
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-[#1C4587]">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Seção 5: Credibilidade */}
            <section className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-[#1C4587]/10 to-blue-50">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-[#1C4587] text-center mb-20"
                >
                    Nossa Credibilidade
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1C4587]/20"
                        >
                            <div className="text-5xl mb-6">{stat.icon}</div>
                            <div className="text-4xl lg:text-5xl font-bold text-[#1C4587] mb-4">{stat.number}</div>
                            <p className="text-xl font-semibold text-gray-700">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Seção 6: Diferencial Competitivo */}
            <section className="py-24 px-4 sm:px-6 lg:px-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-[#1C4587] text-center mb-20"
                >
                    Nosso Diferencial Competitivo
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
                >
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[#1C4587]/10 to-blue-100 rounded-xl">
                            <span className="text-3xl">⚡</span>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#1C4587]">Tecnologia de Ponta</h3>
                                <p className="text-gray-600">Soluções com IA e automação avançada.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[#1C4587]/10 to-blue-100 rounded-xl">
                            <span className="text-3xl">🛡️</span>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#1C4587]">Suporte 24/7</h3>
                                <p className="text-gray-600">Equipe dedicada sempre ao seu lado.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[#1C4587]/10 to-blue-100 rounded-xl">
                            <span className="text-3xl">🎯</span>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#1C4587]">Resultados Comprovados</h3>
                                <p className="text-gray-600">Casos de sucesso em todos os setores.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[#1C4587]/10 to-blue-100 rounded-xl">
                            <span className="text-3xl">✨</span>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#1C4587]">Atendimento Personalizado</h3>
                                <p className="text-gray-600">Estratégias sob medida para você.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Seção 7: CTA com FAQs */}
            <section className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-t from-[#1C4587] to-blue-800 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto text-center"
                >
                    <motion.h2
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold mb-8"
                    >
                        Pronto para Transformar seu Negócio?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl mb-12 opacity-90"
                    >
                        Fale conosco hoje e descubra como a Flexx pode impulsionar seu sucesso.
                    </motion.p>
                    <motion.a
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/contato"
                        className="inline-block bg-white text-[#1C4587] px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 uppercase tracking-wide"
                    >
                        Fale Conosco Agora
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 max-w-4xl mx-auto"
                >
                    <h3 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h3>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.details
                                key={index}
                                className="group"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <summary className="cursor-pointer list-none bg-white/20 backdrop-blur-sm text-white p-6 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex justify-between items-center">
                                    {faq.question}
                                    <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                                </summary>
                                <motion.p
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-6 pb-6 text-lg bg-white/10 rounded-b-xl overflow-hidden"
                                >
                                    {faq.answer}
                                </motion.p>
                            </motion.details>
                        ))}
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
