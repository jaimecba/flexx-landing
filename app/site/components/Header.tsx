'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: '/', label: 'Início' },
        { href: '/sobre', label: 'Sobre' },
        { href: '/serviços', label: 'Serviços' },
        { href: '/login', label: 'Área do Cliente' },
    ];

    const cta = { href: '/contato', label: 'Fale Conosco' };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center text-xl lg:text-2xl font-bold text-gray-900 hover:text-gray-800 transition-colors">
                        Flexx
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:ml-10 lg:flex lg:space-x-8 lg:items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <Link
                        href={cta.href}
                        className="hidden lg:inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 ml-8"
                    >
                        {cta.label}
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden flex flex-col p-1 -mr-1"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`bg-gray-900 block transition-all h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 -translate-y-1' : '-translate-y-0.5'}`}
                        />
                        <span
                            className={`bg-gray-900 block transition-opacity opacity-100 h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <span
                            className={`bg-gray-900 block transition-all h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 translate-y-1' : 'translate-y-0.5'}`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.15, ease: 'easeInOut' }}
                        className="lg:hidden overflow-hidden border-t border-gray-200 bg-white shadow-2xl"
                    >
                        <div className="px-4 pt-5 pb-6 space-y-4 sm:px-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-100 py-3 px-3 rounded-md transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="border-t border-gray-200 pt-4">
                                <Link
                                    href={cta.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center w-full px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                                >
                                    {cta.label}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
