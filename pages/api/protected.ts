// pages/api/protected.ts
import { NextApiRequest, NextApiResponse } from 'next';
import authMiddleware from './middeware/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ message: 'Rota protegida acessada com sucesso!' });
};

export default authMiddleware(handler);