import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Função para navegação programática
    const handleLogin = async () => {
        if (!email || !password) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (response.ok) {
                // Salva o token no localStorage
                localStorage.setItem('token', result.token);
                console.log('Token salvo:', result.token); // Debug
                // Redireciona para a página principal
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

    const handleViewMore = () => {
        router.push('/index');
    };

    return (
        <>
            <Head>
                <title>Login</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossOrigin="anonymous"
                />
               
            </Head>

            {/* Main Container */}
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                {/* Login Container */}
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    {/* Left Box */}
                    <div
                        id="imagem"
                        className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                        style={{
                            zIndex: 3,
                            backgroundImage: 'url(/img/background.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                            minHeight: '400px',
                        }}
                    >
                        {/* Container para o conteúdo */}
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1
                                        data-aos="fade-left"
                                        style={{
                                            zIndex: 10,
                                            color: '#fff',
                                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                        }}
                                        className="text-uppercase fw-semibold display-5"
                                    >
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
                                <h2>Bem Vindo!</h2>
                                <p>We are happy to have you back.</p>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-1">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="formCheck" />
                                    <label htmlFor="formCheck" className="form-check-label text-secondary">
                                        <small>Remember Me</small>
                                    </label>
                                </div>
                                <div className="forgot">
                                    <small>
                                        <Link href="/recuperar-senha">Forgot Password?</Link>
                                    </small>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <button
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    className="btn btn-lg w-100 fs-6 btn-brand2 me-2"
                                    style={{ backgroundColor: 'rgb(12, 129, 28)', borderRadius: '5%' }}
                                    onClick={handleLogin}
                                    disabled={loading}
                                >
                                    {loading ? 'Carregando...' : 'Login'}
                                </button>
                            </div>
                            <div className="input-group mb-3">
                                <button
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    className="btn btn-lg w-100 fs-6 btn-brand2 me-2"
                                    style={{ backgroundColor: 'rgb(0, 0, 0)', borderRadius: '5%' }}
                                    onClick={handleViewMore}
                                >
                                    Ver Mais
                                </button>
                            </div>
                            <div className="row">
                                <small>
                                    Don't have account? <Link href="/sign-up">Sign Up</Link>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Exibir dados ou erros */}
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <style jsx>{`
                @media (max-width: 768px) {
                    #imagem {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}