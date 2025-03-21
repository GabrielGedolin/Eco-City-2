import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
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
        }
    };

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/admusers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (response.ok) {
                localStorage.setItem('token', result.token);
                router.push('/');
            } else {
                throw new Error(result.error || 'Erro ao fazer login');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro desconhecido');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <div className="container-fluid vh-100">
                <h1 className="text-uppercase btn-brand text-gradient fw-semibold display-5">Usuários</h1>
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

            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
}
