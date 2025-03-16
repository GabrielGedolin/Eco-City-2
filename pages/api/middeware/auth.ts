import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta';

// Estende o tipo NextApiRequest para incluir a propriedade userId
interface ExtendedNextApiRequest extends NextApiRequest {
  headers: any;
  userId?: any;
}

export default function authMiddleware(handler: (req: ExtendedNextApiRequest, res: NextApiResponse) => Promise<void>) {
  return async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    // Verifica se o token está presente no cabeçalho da requisição
    const token = req.headers.authorization?.split(' ')[1]; // Formato: "Bearer <token>"

    if (!token) {
      return res.status(401).json({ error: 'Token de autenticação não fornecido.' });
    }

    try {
      // Verifica se o token é válido
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
      // Adiciona o ID do usuário à requisição para uso posterior
      req.userId = decoded.userId; // Agora isso é permitido
      // Chama o handler da rota protegida
      return handler(req, res);
    } catch (err) {
      return res.status(401).json({ error: 'Token inválido ou expirado.' });
    }
  };
}