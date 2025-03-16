import { neon } from '@neondatabase/serverless';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const sql = neon(process.env.DATABASE_URL!);
const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta'; // Use uma chave segura

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Validação básica dos campos
        if (!email || !password) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        try {
            // Busca o usuário pelo e-mail
            const user = await sql`
                SELECT * FROM users WHERE email = ${email}
            `;

            if (user.length === 0) {
                return res.status(400).json({ error: 'E-mail ou senha incorretos.' });
            }

            // Verifica a senha
            const passwordMatch = await bcrypt.compare(password, user[0].password);
            if (!passwordMatch) {
                return res.status(400).json({ error: 'E-mail ou senha incorretos.' });
            }

            // Gera um token JWT
            const token = jwt.sign({ userId: user[0].id }, JWT_SECRET, { expiresIn: '1h' });

            // Retorna o token e os dados do usuário (sem a senha)
            const { password: _, ...userData } = user[0];
            res.status(200).json({ user: userData, token });
        } catch (err) {
            console.error('Erro ao fazer login:', err);
            res.status(500).json({ error: 'Erro ao fazer login.' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido.' });
    }
}