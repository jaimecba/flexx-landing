import { motion } from 'framer-motion';

const Products = () => {
    const products = [
        {
            icon: '🖥️',
            title: 'Ponto Web',
            description: 'Sistema de controle de ponto online acessível de qualquer dispositivo. Registre entradas e saídas com facilidade e segurança.',
            features: ['Biometria facial', 'Relatórios em tempo real', 'Acesso mobile', 'Integrações com folha'],
            link: '/ponto-web',
        },
        {
            icon: '🔒',
            title: 'Secullum Acesso',
            description: 'Controle de acesso inteligente para empresas. Gerencie permissões e monitore entradas com tecnologia avançada.',
            features: ['Leitores RFID e biometria', 'Controle por horário', 'Relatórios de acesso', 'Integração com alarmes'],
            link: '/secullum-acesso',
        },
        {
            icon: '🏋️‍♂️',
            title: 'Secullum Academia',
            description: 'Gerencie sua academia de forma completa. Controle de alunos, mensalidades e agendamentos em um só lugar.',
            features: ['Cadastro de alunos', 'Controle financeiro', 'Agendamento de aulas', 'Relatórios gerenciais'],
            link: '/secullum-academia',
        },
    ];

    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center text-gray-800 mb-16"
                >
                    Nossos Produtos
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
                        >
                            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {product.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {product.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                {product.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <span className="text-blue-500 mr-3 text-xl font-bold">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={product.link}
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Conhecer Mais
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
