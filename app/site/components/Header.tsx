// Header.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Início', href: '#' },
        { name: 'Serviços', href: '#services' },
        { name: 'Diferenciais', href: '#diferenciais' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg fixed w-full z-50"
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div
                    className="text-2xl font-bold"
                    whileHover={{ scale: 1.05 }}
                >
                    Flexx Tecnologia
                </motion.div>
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="hover:text-blue-200 transition-colors"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </nav>
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-blue-700 px-4 py-4 space-y-4"
                >
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="block hover:text-blue-200 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;