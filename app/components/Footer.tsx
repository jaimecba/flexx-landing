import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                    <div className="flex justify-center md:justify-start">
                        <Image
                            src="/images/logos/LOGO_HORIZONTAL2.png"
                            alt="Logo Flexx"
                            width={150}
                            height={50}
                            className="h-12 w-auto object-contain"
                        />
                    </div>
                    <nav className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 text-sm md:text-base">
                        <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
                            Início
                        </Link>
                        <Link href="/sobre" className="hover:text-blue-400 transition-colors duration-200">
                            Sobre Nós
                        </Link>
                        <Link href="/servicos" className="hover:text-blue-400 transition-colors duration-200">
                            Serviços
                        </Link>
                        <Link href="/contato" className="hover:text-blue-400 transition-colors duration-200">
                            Contato
                        </Link>
                    </nav>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4 text-sm md:text-base">
                        <a
                            href="https://facebook.com/flexx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://instagram.com/flexx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://linkedin.com/company/flexx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm md:text-base">
                    <p>&copy; 2024 Flexx. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;