const { Client } = require('pg');

async function removeUserById(userId) {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    });

    try {
        await client.connect();
        const res = await client.query('DELETE FROM users WHERE id = $1 RETURNING *;', [userId]);
        
        if (res.rowCount > 0) {
            console.log('Usuário removido com sucesso:', res.rows[0]);
        } else {
            console.log('Nenhum usuário encontrado com o ID fornecido.');
        }
    } catch (err) {
        console.error('Erro ao remover usuário:', err);
    } finally {
        await client.end();
    }
}

// Exemplo de uso
const userId = 1; // Substitua pelo ID desejado
removeUserById(userId);
