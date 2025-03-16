// pages/api/data.ts
import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    try {
        const sql = neon(process.env.DATABASE_URL!);
        const data = await sql`SELECT * FROM sua_tabela`;
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro na API:', error);
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
}