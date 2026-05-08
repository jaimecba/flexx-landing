'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login } from '@/services/authService';

type FormData = {
    email: string;
    password: string;
};

type Errors = {
    email?: string;
    password?: string;
    general?: string;
};

export default function LoginPage() {
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Limpa erro específico do campo
        if (errors[name as keyof Errors]) {
            setErrors((prev) => ({ ...prev, [name as keyof Errors]: undefined }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Errors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email é obrigatório.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email inválido.';
        }

        if (!formData.password) {
            newErrors.password = 'Senha é obrigatória.';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Senha deve ter pelo menos 6 caracteres.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setMessage('');

        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const response = await login(formData.email, formData.password);
            localStorage.setItem('token', response.token);
            setMessage('Login realizado com sucesso! Redirecionando...');
            setTimeout(() => {
                router.push('/dashboard');
            }, 2000);
        } catch (error: any) {
            setErrors({ general: error.message || 'Erro ao realizar login. Tente novamente.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-md w-full border border-white/20"
            >
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        Bem-vindo
                    </h1>
                    <p className="text-gray-600">Faça login na sua conta</p>
                </div>

                {message && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-2xl mb-6 text-center font-medium"
                    >
                        {message}
                    </motion.div>
                )}

                {errors.general && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-red-100 border border-red-300 text-red-800 p-4 rounded-2xl mb-6 text-center font-medium"
                    >
                        {errors.general}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                            placeholder="seu@email.com"
                        />
                        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Senha
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                            placeholder="••••••••"
                        />
                        {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isSubmitting ? 'Entrando...' : 'Entrar'}
                    </motion.button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-600">
                    Não tem uma conta?{' '}
                    <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200 underline-offset-2">
                        Cadastre-se aqui
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}