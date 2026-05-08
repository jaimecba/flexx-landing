import Link from 'next/link';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-gray-800 py-20 px-4 md:px-8 lg:px-16 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 text-center lg:text-left text-white"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        Descubra o Ponto Web
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                        A solução completa para gerenciar seu ponto de venda. Automatize vendas, controle de estoque,
                        relatórios em tempo real e muito mais. Simplifique seu negócio com tecnologia de ponta!
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 flex justify-center lg:justify-end"
                >
                    <Link href="/pontoweb" className="block">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 md:px-16 md:py-8 rounded-2xl text-xl md:text-2xl font-bold shadow-2xl hover:shadow-3xl hover:shadow-blue-500/25 transition-all duration-300 border-4 border-white/20 hover:border-blue-200/50"
                        >
                            Conhecer Ponto Web
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;