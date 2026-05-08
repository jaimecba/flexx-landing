'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/services/authService';

type FormDataType = {
    name: string;
    email: string;
    cnpj: string;
    phone: string;
    password: string;
};

const validateCNPJ = (cnpj: string): boolean => {
    const cleaned = cnpj.replace(/[^\d]/g, '');
    if (cleaned.length !== 14) return false;
    if (/^(\d)\1{13}$/.test(cleaned)) return false;

    let i = 0;
    let sum = 0;
    let pos = 5;
    for (i = 0; i < 12; i++) {
        sum += parseInt(cleaned.charAt(i)) * pos;
        pos = pos === 2 ? 9 : pos - 1;
    }
    let digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (digit !== parseInt(cleaned.charAt(12))) return false;

    sum = 0;
    pos = 6;
    for (i = 0; i < 13; i++) {
        sum += parseInt(cleaned.charAt(i)) * pos;
        pos = pos === 2 ? 9 : pos - 1;
    }
    digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return digit === parseInt(cleaned.charAt(13));
};

const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[^\d]/g, '');
    return cleaned.length === 10 || cleaned.length === 11;
};

export default function RegisterPage() {
    const [formData, setFormData] = useState<FormDataType>({
        name: '',
        email: '',
        cnpj: '',
        phone: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // 1. Validar todos os campos
        if (!formData.name.trim()) {
            setError('Nome é obrigatório.');
            return;
        }
        if (!formData.email.trim()) {
            setError('E-mail é obrigatório.');
            return;
        }
        const trimmedEmail = formData.email.trim().toLowerCase();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedEmail)) {
            setError('E-mail inválido.');
            return;
        }
        if (!formData.cnpj.trim()) {
            setError('CNPJ é obrigatório.');
            return;
        }
        if (!validateCNPJ(formData.cnpj)) {
            setError('CNPJ inválido.');
            return;
        }
        if (!formData.phone.trim()) {
            setError('Telefone é obrigatório.');
            return;
        }
        if (!validatePhone(formData.phone)) {
            setError('Telefone inválido. Deve conter 10 ou 11 dígitos.');
            return;
        }
        if (formData.password.length < 6) {
            setError('Senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // 2. Limpar dados (remover caracteres especiais e normalizar)
        const trimmedName = formData.name.trim().replace(/\s+/g, ' ');

        // 3. Chamar register com três parâmetros separados
        setLoading(true);
        try {
            await register(trimmedEmail, formData.password, trimmedName);
            // 4. Exibir mensagem de sucesso (verde)
            setSuccess('Cadastro realizado com sucesso! Redirecionando para o login em 2 segundos...');
            // 5. Redirecionar após 2s
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (err: any) {
            // Exibir mensagem de erro (vermelho)
            setError(err.message || 'Erro ao realizar o cadastro. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Criar Conta</h1>
                    <p className="text-gray-500 mt-2">Preencha os dados para se registrar</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-1">CNPJ</label>
                        <input
                            id="cnpj"
                            name="cnpj"
                            type="text"
                            value={formData.cnpj}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="00.000.000/0000-00"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="(11) 99999-9999"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-md">{error}</p>}
                    {success && <p className="text-green-500 text-sm text-center bg-green-50 p-3 rounded-md">{success}</p>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Já tem uma conta? <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">Faça login</a>
                </p>
            </div>
        </main>
    );
}