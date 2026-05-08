import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema, ZodError } from 'zod';

export const validate = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errors = error.issues.map(issue => ({
                    campo: issue.path.join('.'),
                    mensagem: issue.message,
                }));
                return res.status(400).json({
                    mensagem: 'Dados de entrada inválidos.',
                    erros: errors
                });
            }
            next(error);
        }
    };
};