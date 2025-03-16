// pages/api/middleware/auth.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta'; // Use a mesma chave usada no login

export default function authMiddleware(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        // Verifica se o token está presente no cabeçalho da requisição
        const token = req.headers.authorization?.split(' ')[1]; // Formato: "Bearer <token>"

        if (!token) {
            return res.status(401).json({ error: 'Token de autenticação não fornecido.' });
        }

        try {
            // Verifica se o token é válido
            const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
            // Adiciona o ID do usuário à requisição para uso posterior
            req.userId = decoded.userId;
            // Chama o handler da rota protegida
            return handler(req, res);
        } catch (err) {
            return res.status(401).json({ error: 'Token inválido ou expirado.' });
        }
    };
}