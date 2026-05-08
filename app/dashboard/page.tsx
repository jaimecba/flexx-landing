'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

type User = {
    name: string;
    email: string;
};

export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState<User>({ name: '', email: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userStr = localStorage.getItem('user');

        if (!token || !userStr) {
            router.replace('/login');
            return;
        }

        try {
            const parsedUser = JSON.parse(userStr) as User;
            setUser(parsedUser);
        } catch (error) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            router.replace('/login');
            return;
        }

        setLoading(false);
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.replace('/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 flex items-center justify-center p-8">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full shadow-lg"
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 flex items-center justify-center p-8">
            <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 max-w-md w-full text-center border border-white/50"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                    className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 shadow-xl flex items-center justify-center"
                >
                    <span className="text-3xl font-bold text-white">👋</span>
                </motion.div>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight"
                >
                    Bem-vindo, <br /> <span className="text-5xl md:text-6xl">{user.name}!</span>
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-700 mb-12 font-medium bg-white/50 px-6 py-3 rounded-2xl shadow-md"
                >
                    {user.email}
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-200"
                >
                    Sair
                </motion.button>
            </motion.div>
        </div>
    );
}
