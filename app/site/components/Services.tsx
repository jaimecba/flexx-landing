
// Services.tsx
import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Desenvolvimento Web',
        description: 'Sites e aplicações web modernas e responsivas.',
        icon: '🌐',
    },
    {
        title: 'Desenvolvimento Mobile',
        description: 'Apps nativos e híbridos para iOS e Android.',
        icon: '📱',
    },
    {
        title: 'Consultoria em TI',
        description: 'Estratégias personalizadas para otimizar sua infraestrutura.',
        icon: '💼',
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-gray-800 text-center mb-16"
                >
                    Nossos Serviços
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all border border-gray-200"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;