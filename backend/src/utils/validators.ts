import { z } from 'zod';

export const registerSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(8, 'Senha deve ter pelo menos 8 caracteres'),
});

export const loginSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().nonempty('Senha é obrigatória'),
});

export const forgotPasswordSchema = z.object({
    email: z.string().email('Email inválido'),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;