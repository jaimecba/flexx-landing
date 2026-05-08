'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const isValidEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        if (!email.trim()) {
            setError('O email é obrigatório.')
            return
        }

        if (!isValidEmail(email)) {
            setError('Por favor, insira um email válido.')
            return
        }

        setLoading(true)
        // Simula chamada de API
        setTimeout(() => {
            setSuccess(true)
            setLoading(false)
        }, 2000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-gray-50 pt-16 lg:pt-20 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md w-full space-y-8 bg-white shadow-2xl rounded-3xl p-8 sm:p-10 border border-gray-200/50 backdrop-blur-sm"
            >
                <div className="text-center space-y-4">
                    <motion.h1
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent tracking-tight"
                    >
                        Recuperar Senha
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto"
                    >
                        Digite seu endereço de email abaixo e nós enviaremos um link seguro para redefinir sua senha.
                    </motion.p>
                </div>

                {success ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-6 pt-4"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: 'spring', stiffness: 400 }}
                            className="mx-auto w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg"
                        >
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </motion.div>
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">Link enviado com sucesso!</h2>
                            <p className="text-gray-600">
                                Enviamos um link de recuperação para <span className="font-semibold text-gray-900">{email}</span>. <br />
                                Verifique sua caixa de entrada ou pasta de spam.
                            </p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/login"
                                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                            >
                                Voltar para Login
                            </Link>
                        </motion.div>
                    </motion.div>
                ) : (
                    <>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-2"
                            >
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 tracking-wide">
                                    Endereço de Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        if (error) setError('')
                                    }}
                                    className={`w-full px-4 py-3.5 border rounded-xl shadow-sm text-lg placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-blue-500/50 focus:border-blue-500 bg-white/80 backdrop-blur-sm ${error
                                            ? 'border-red-300 bg-red-50/50 focus:border-red-400 focus:ring-red-400/50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        } ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    placeholder="exemplo@seudominio.com"
                                    disabled={loading}
                                />
                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="text-sm text-red-600 mt-1 px-1"
                                    >
                                        {error}
                                    </motion.p>
                                )}
                            </motion.div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                whileHover={!loading ? { scale: 1.02 } : {}}
                                whileTap={!loading ? { scale: 0.98 } : {}}
                                className="group w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:cursor-not-allowed disabled:shadow-none"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Enviando link...
                                    </span>
                                ) : (
                                    'Enviar Link de Recuperação'
                                )}
                            </motion.button>
                        </form>

                        <div className="pt-6 text-center border-t border-gray-200">
                            <Link
                                href="/login"
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-all duration-200 hover:underline group"
                            >
                                ← Voltar para Login
                            </Link>
                        </div>
                    </>
                )}
            </motion.div>
        </div>
    )
}
