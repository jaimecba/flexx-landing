import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Service = {
    title: string;
    description: string;
    icon: string;
    color: string;
};

const services: Service[] = [
    {
        title: 'Desenvolvimento Web',
        description: 'Criamos aplicações web modernas, responsivas e otimizadas para todos os dispositivos.',
        icon: '/icons/dev_web.png',
        color: 'bg-blue-500',
    },
    {
        title: 'Desenvolvimento Mobile',
        description: 'Desenvolvemos aplicativos nativos e cross-platform para iOS e Android com foco em performance e UX.',
        icon: '/icons/dev_mobile.png',
        color: 'bg-emerald-500',
    },
    {
        title: 'Consultoria em TI',
        description: 'Oferecemos consultoria especializada em TI para otimizar sua infraestrutura e processos tecnológicos.',
        icon: '/icons/consult_ti.png',
        color: 'bg-purple-500',
    },
];

const Services: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
                >
                    Nossos Serviços
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                        >
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={100}
                                height={100}
                                className="mx-auto mb-6 block w-24 h-24 object-contain"
                            />
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
