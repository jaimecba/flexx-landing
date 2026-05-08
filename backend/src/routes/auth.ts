import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { dataSource } from '../config/database';
import { User } from '../entities/User';

interface RegisterBody {
    name: string;
    email: string;
    password: string;
}

interface LoginBody {
    email: string;
    password: string;
}

interface UserResponse {
    id: number;
    name: string;
    email: string;
}

const router = Router();

router.post('/register', async (req: Request<{}, any, RegisterBody>, res: Response) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        const userRepository = dataSource.getRepository(User);

        const existingUser = await userRepository.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = userRepository.create({ name, email, password: hashedPassword });
        const savedUser = await userRepository.save(user);

        const userResponse: UserResponse = {
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email
        };

        res.status(201).json({ message: 'Usuário criado com sucesso', user: userResponse });
    } catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

router.post('/login', async (req: Request<{}, any, LoginBody>, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios' });
        }

        const userRepository = dataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        console.log(`DEBUG: Usuário encontrado: ${email}`);
        console.log(`DEBUG: Senha recebida: ${password}`);
        console.log(`DEBUG: Hash no banco: ${user.password}`);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log(`DEBUG: Resultado da comparação: ${isPasswordValid}`);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET || 'default_secret',
            { expiresIn: '24h' }
        );

        const userResponse: UserResponse = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        res.status(200).json({ message: 'Login realizado com sucesso', token, user: userResponse });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

export default router;
