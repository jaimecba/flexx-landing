// Diferenciais.tsx
import React from 'react';
import { motion } from 'framer-motion';

const diferenciais = [
    'Inovação constante',
    'Equipe experiente',
    'Soluções personalizadas',
    'Suporte 24/7',
    'Qualidade garantida',
    'Preços competitivos',
];

const Diferenciais: React.FC = () => {
    return (
        <section id="diferenciais" className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-gray-800 text-center mb-16"
                >
                    Nossos Diferenciais
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {diferenciais.map((diferencial, index) => (
                        <motion.div
                            key={diferencial}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center border-l-4 border-blue-500"
                        >
                            <p className="text-xl font-semibold text-gray-800">{diferencial}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Diferenciais;