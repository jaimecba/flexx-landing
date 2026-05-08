import { pool } from '../database';

export interface User {
    readonly id: number;
    email: string;
    password: string;
    resetToken: string | null;
    resetExpires: Date | null;
}

export async function createUser(email: string, hashedPassword: string): Promise<User> {
    try {
        const query = `
      INSERT INTO users (email, password)
      VALUES ($1, $2)
      RETURNING id, email, password, reset_token AS "resetToken", reset_expires AS "resetExpires"
    `;
        const { rows } = await pool.query(query, [email, hashedPassword]);
        return rows[0] as User;
    } catch (error) {
        console.error('Erro em createUser:', error);
        throw error;
    }
}

export async function findByEmail(email: string): Promise<User | null> {
    try {
        const query = `
      SELECT id, email, password, reset_token AS "resetToken", reset_expires AS "resetExpires"
      FROM users
      WHERE email = $1
    `;
        const { rows } = await pool.query(query, [email]);
        return rows[0] as User || null;
    } catch (error) {
        console.error('Erro em findByEmail:', error);
        return null;
    }
}

export async function findById(id: number): Promise<User | null> {
    try {
        const query = `
      SELECT id, email, password, reset_token AS "resetToken", reset_expires AS "resetExpires"
      FROM users
      WHERE id = $1
    `;
        const { rows } = await pool.query(query, [id]);
        return rows[0] as User || null;
    } catch (error) {
        console.error('Erro em findById:', error);
        return null;
    }
}

export async function saveResetToken(userId: number, token: string, expires: Date): Promise<void> {
    try {
        const query = `
      UPDATE users
      SET reset_token = $2, reset_expires = $3
      WHERE id = $1
    `;
        await pool.query(query, [userId, token, expires]);
    } catch (error) {
        console.error('Erro em saveResetToken:', error);
        throw error;
    }
}

export async function updatePassword(userId: number, hashedPassword: string): Promise<User | null> {
    try {
        const query = `
      UPDATE users
      SET password = $2
      WHERE id = $1
      RETURNING id, email, password, reset_token AS "resetToken", reset_expires AS "resetExpires"
    `;
        const { rows } = await pool.query(query, [userId, hashedPassword]);
        return rows[0] as User || null;
    } catch (error) {
        console.error('Erro em updatePassword:', error);
        return null;
    }
}
