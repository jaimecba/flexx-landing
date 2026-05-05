// Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center py-20 pt-32">
            <div className="container mx-auto px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
                >
                    Bem-vindo à
                    <span className="text-blue-600 block">Flexx Tecnologia</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
                >
                    Soluções inovadoras em tecnologia para impulsionar o seu negócio.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition-all shadow-xl"
                >
                    Saiba Mais
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;