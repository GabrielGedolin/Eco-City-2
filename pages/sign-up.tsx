import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignUpPage() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação básica
        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Erro ao cadastrar usuário.');
            }

            // Redireciona para a página de login após o cadastro
            router.push('/sign-in');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro ao cadastrar usuário.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Sign Up</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/assets/css/style.css" />
            </Head>

            {/* Main Container */}
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                {/* Sign Up Container */}
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    {/* Left Box */}
                    <div
                        className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                        style={{ background: 'url(/img/background.jpg) no-repeat center center/cover', backgroundColor: '#f0f0f0' }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 data-aos="fade-left" className="text-uppercase text-gradient3 fw-semibold display-5">
                                        Eco City
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Box */}
                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <Link className="navbar-brand" href="/">
                                    <img src="/img/Logo1.png" alt="" />
                                </Link>
                                <h2>Crie sua conta!</h2>
                                <p>Junte-se a nós e comece sua jornada.</p>
                            </div>

                            {/* Formulário de Cadastro */}
                            <form onSubmit={handleSubmit}>
                                {/* Nome Completo */}
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Nome completo"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="input-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Senha */}
                                <div className="input-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Confirmar Senha */}
                                <div className="input-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Confirmar senha"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Mensagem de Erro */}
                                {error && <p style={{ color: 'red' }}>{error}</p>}

                                {/* Botão de Cadastro */}
                                <div className="input-group mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-lg w-100 fs-6 btn-brand2 me-2"
                                        style={{ backgroundColor: 'rgb(12, 129, 28)', borderRadius: '5%' }}
                                        disabled={loading}
                                    >
                                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                                    </button>
                                </div>
                            </form>

                            {/* Link para Login */}
                            <div className="row">
                                <small>
                                    Já tem uma conta? <Link href="/sign-in">Faça login</Link>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script src="https://kit.fontawesome.com/3a47ab78fd.js" crossOrigin="anonymous"></script>
        </>
    );
}   