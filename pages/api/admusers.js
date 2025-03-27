import { neon } from '@neondatabase/serverless';
import { NextApiRequest, NextApiResponse } from 'next';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const localizacoes = await sql`SELECT id, nome, email FROM localizacoes`;
            res.status(200).json(localizacoes);
        } catch (err) {
            console.error('Erro ao buscar localizações:', err);
            res.status(500).json({ error: 'Erro ao buscar localizações.' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido.' });
    }
}
