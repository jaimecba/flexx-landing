import Image from 'next/image';

import React from 'react';

const Products = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Nossos Produtos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Ponto Web */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                        <div className="w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                            <Image
                                src="/icons/ponto.png"
                                alt="Ícone Ponto Web"
                                width={192}
                                height={192}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Ponto Web</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">Sistema completo de controle de ponto eletrônico acessível via web, com interface intuitiva e relatórios detalhados.</p>
                        <ul className="text-left mb-8 space-y-3">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                Registro de entrada e saída em tempo real
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                Relatórios personalizáveis e exportáveis
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                Integração com sistemas de folha de pagamento
                            </li>
                        </ul>
                        <a
                            href="/produtos/ponto-web"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-semibold"
                        >
                            Saiba Mais
                        </a>
                    </div>

                    {/* Secullum Acesso */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                        <div className="w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                            <Image
                                src="/icons/acesso.png"
                                alt="Ícone Secullum Acesso"
                                width={192}
                                height={192}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Secullum Acesso</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">Solução robusta de controle de acesso com biometria, cartões e integração com alarmes de segurança.</p>
                        <ul className="text-left mb-8 space-y-3">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                Controle por biometria e RFID
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                Autorizações por horário e perfil
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                Integração com câmeras e alarmes
                            </li>
                        </ul>
                        <a
                            href="/produtos/secullum-acesso"
                            className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-colors duration-300 font-semibold"
                        >
                            Saiba Mais
                        </a>
                    </div>

                    {/* Secullum Academia */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                        <div className="w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                            <Image
                                src="/icons/academia.png"
                                alt="Ícone Secullum Academia"
                                width={192}
                                height={192}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Secullum Academia</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">Gestão completa para academias e clubes, controlando matrículas, acessos e finanças.</p>
                        <ul className="text-left mb-8 space-y-3">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                                Controle de matrículas e mensalidades
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                                Agendamento de aulas e professores
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                                Relatórios financeiros e de alunos
                            </li>
                        </ul>
                        <a
                            href="/produtos/secullum-academia"
                            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors duration-300 font-semibold"
                        >
                            Saiba Mais
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
