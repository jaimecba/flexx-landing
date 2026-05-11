// Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mt-20"
        >
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Flexx Tecnologia</h3>
                        <p className="text-gray-300">Líder em soluções tecnológicas inovadoras.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white">Início</a></li>
                            <li><a href="#services" className="hover:text-white">Serviços</a></li>
                            <li><a href="#diferenciais" className="hover:text-white">Diferenciais</a></li>
                            <li><a href="#contact" className="hover:text-white">Contato</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Redes Sociais</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-2xl hover:text-blue-200">LinkedIn</a>
                            <a href="#" className="text-2xl hover:text-blue-200">GitHub</a>
                            <a href="#" className="text-2xl hover:text-blue-200">Twitter</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contato</h4>
                        <p className="text-gray-300">comercial@flexxtecnologia.com.br</p>
                        <p className="text-gray-300">+55 (65) 2129-4584</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
                    <p>&copy; 2024 Flexx Tecnologia. Todos os direitos reservados.</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;