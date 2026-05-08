import api from './api';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

export const setToken = (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
};

export const logout = (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
};

export const register = async (email: string, password: string, name: string): Promise<any> => {
    try {
        const response = await api.post('/auth/register', { email, password, name });
        return response.data;
    } catch (error: any) {
        console.error('Erro no registro:', error);
        throw error;
    }
};

export const login = async (email: string, password: string): Promise<any> => {
    try {
        const response = await api.post('/auth/login', { email, password });
        const { token, user } = response.data;
        setToken(token);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        return response.data;
    } catch (error: any) {
        console.error('Erro no login:', error);
        throw error;
    }
};