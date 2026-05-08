import { dataSource } from "../config/database";
import { User } from "../entities/User";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export class AuthController {
    static async register(email: string, password: string, name: string) {
        try {
            const userRepository = dataSource.getRepository(User);
            const existingUser = await userRepository.findOneBy({ email });
            if (existingUser) {
                throw new Error("Email já está em uso.");
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = userRepository.create({
                email,
                password: hashedPassword,
                name
            });
            const savedUser = await userRepository.save(newUser);
            const { password: _, ...userWithoutPassword } = savedUser;
            return userWithoutPassword;
        } catch (error) {
            throw error;
        }
    }

    static async login(email: string, password: string) {
        try {
            const userRepository = dataSource.getRepository(User);
            const user = await userRepository.findOneBy({ email });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                throw new Error("Email ou senha inválidos.");
            }
            const token = jwt.sign(
                { userId: user.id },
                process.env.JWT_SECRET as string || "secret",
                { expiresIn: "1h" }
            );
            const { password: _, ...userWithoutPassword } = user;
            return { token, user: userWithoutPassword };
        } catch (error) {
            throw error;
        }
    }

    static logout() {
        return { message: "Logout realizado com sucesso." };
    }
}
