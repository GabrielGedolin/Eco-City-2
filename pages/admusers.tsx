import Head from 'next/head';
import { useState, useEffect } from 'react';

// Definindo a interface para o tipo de usuário
interface User {
    id: number;
    nome: string;
    email: string;
}

export default function UsersPage() {
    // Especificando o tipo de 'users' como um array de 'User'
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/admusers');
            const data = await response.json();
            if (response.ok) {
                setUsers(data);
            } else {
                setError('Erro ao carregar usuários');
            }
        } catch (err) {
            setError('Erro ao buscar usuários');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Usuários</title>
            </Head>

            <div className="container-fluid vh-100">
                <h1 className="text-uppercase btn-brand text-gradient fw-semibold display-5">Usuários</h1>
                {loading && <p>Carregando...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <table className="table table-sm table-striped mt-3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
