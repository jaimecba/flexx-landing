'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const linkItems = [
        { href: '/', label: 'Início' },
        { href: '/sobre', label: 'Sobre Nós' },
        { href: '/servicos', label: 'Serviços' },
        { href: '/contato', label: 'Contato' }
    ];

    const socialLinks = [
        { href: 'https://github.com/suaempresa', icon: Github, label: 'Github' },
        { href: 'https://twitter.com/suaempresa', icon: Twitter, label: 'Twitter' },
        { href: 'https://instagram.com/suaempresa', icon: Instagram, label: 'Instagram' },
        { href: 'https://linkedin.com/company/suaempresa', icon: Linkedin, label: 'LinkedIn' }
    ];

    return (
        <footer className="w-full bg-neutral-900 border-t border-neutral-800 text-neutral-300 py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                >
                    {/* Coluna 1: Logo e Descrição */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg" />
                            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-neutral-200 bg-clip-text text-transparent">
                                MinhaEmpresa
                            </h2>
                        </div>
                        <p className="text-neutral-400 leading-relaxed text-sm md:text-base max-w-md">
                            Somos uma empresa inovadora dedicada a entregar soluções de alta qualidade.
                            Nossa missão é transformar ideias em realidade com excelência e criatividade.
                        </p>
                    </motion.div>

                    {/* Coluna 2: Links Úteis */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-white">Links Úteis</h3>
                        <ul className="space-y-3">
                            {linkItems.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    variants={itemVariants}
                                    className="w-full"
                                >
                                    <Link
                                        href={link.href}
                                        className="group relative text-neutral-400 hover:text-blue-400 text-base font-medium block py-2 px-2 transition-all duration-300 ease-out hover:translate-x-2 after:absolute after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 after:group-hover:w-full"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Coluna 3: Redes Sociais */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-6 md:text-right lg:text-right"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-white">Redes Sociais</h3>
                        <div className="flex flex-wrap gap-4 justify-start md:justify-end">
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-blue-400 transition-all duration-300 shadow-md hover:shadow-xl border border-transparent hover:border-neutral-700"
                                    initial="hidden"
                                    whileHover={{ scale: 1.15, rotate: 8, y: -4 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Icon size={24} aria-label={label} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Linha de Direitos Autorais */}
                <div className="border-t border-neutral-800 mt-16 pt-8 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-neutral-500 text-sm md:text-base font-medium"
                    >
                        &copy; {new Date().getFullYear()} MinhaEmpresa. Todos os direitos reservados.
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
