import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth';
import { initializeDatabase } from './config/database';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

// Rota GET / para health check
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Servidor rodando' });
});

app.use('/auth', authRouter);

// Middleware de erro global
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo deu errado!' });
});

async function startServer() {
    await initializeDatabase();
    const port = process.env.PORT || '3001';
    app.listen(parseInt(port, 10), () => {
        console.log(`Server running on port ${port}`);
    });
}

startServer();

export default app;
