import { neon } from '@neondatabase/serverless';
import { NextApiRequest, NextApiResponse } from 'next';

const sql = neon(process.env.DATABASE_URL!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const localizacoes = await sql`SELECT id, nome, email FROM localizacoes`;
            res.status(200).json({ localizacoes });
        } catch (err) {
            console.error('Erro ao buscar localizações:', err);
            res.status(500).json({ error: 'Erro ao buscar localizações.' });
        }
    } else if (req.method === 'DELETE') {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ error: 'ID da localização é obrigatório.' });
        }
        
        try {
            await sql`DELETE FROM localizacoes WHERE id = ${id}`;
            res.status(200).json({ message: 'Localização removida com sucesso.' });
        } catch (err) {
            console.error('Erro ao remover localização:', err);
            res.status(500).json({ error: 'Erro ao remover localização.' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido.' });
    }
}
