import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function PaginaLogin() {
    const router = useRouter();
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const fazerLogin = async () => {
        if (!email || !senha) {
            setErro('Por favor, preencha todos os campos.');
            return;
        }

        setCarregando(true);
        setErro(null);

        try {
            const resposta = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            const resultado = await resposta.json();

            if (resposta.ok) {
                localStorage.setItem('token', resultado.token);
                router.push('/');
            } else {
                throw new Error(resultado.error || 'Erro ao fazer login');
            }
        } catch (err) {
            setErro(err instanceof Error ? err.message : 'Erro desconhecido');
        } finally {
            setCarregando(false);
        }
    };

    return (
        <>
            <Head>
                <title>Acesso</title>
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

            {/* Container Principal */}
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                {/* Container de Login */}
                <div className="row border rounded-5 p-3 bg-white shadow box-area" style={{ maxWidth: '800px', width: '100%' }}>
                    {/* Box Direito */}
                    <div className="col-md-12 box-direito">
                        <div className="row align-items-center">
                            <div className="header-text mb-4 text-center">
                                <Link className="navbar-brand" href="/">
                                    <img src="/img/LOGO (2).png" alt="Logo" style={{ width: '40px', height: 'auto' }} />
                                </Link>
                                <h2>Bem Vindo!</h2>
                                <p>Estamos felizes em te ver novamente.</p>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Endereço de email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-1">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="lembrar" />
                                    <label htmlFor="lembrar" className="form-check-label text-secondary">
                                        <small>Lembrar de mim</small>
                                    </label>
                                </div>
                                <div className="forgot">
                                    <small>
                                        <Link href="/recuperar-senha">Esqueceu a senha?</Link>
                                    </small>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <button
                                    className="btn btn-lg w-100 fs-6 btn-brand2 me-2"
                                    style={{ backgroundColor: 'rgb(12, 129, 28)', borderRadius: '5%', color: 'white' }}
                                    onClick={fazerLogin}
                                    disabled={carregando}
                                >
                                    {carregando ? 'Carregando...' : 'Entrar'}
                                </button>
                            </div>
                            
                            <div className="row text-center">
                                <small>
                                    Não tem uma conta? <Link href="/cadastro">Cadastre-se</Link>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Exibir dados ou erros */}
            {carregando && <p>Carregando...</p>}
            {erro && <p style={{ color: 'red', textAlign: 'center' }}>{erro}</p>}

            <style jsx>{` 
                .box-area {
                    max-width: 800px;
                    width: 100%;
                }

                .btn-brand2 {
                    transition: background-color 0.3s ease;
                }

                .btn-brand2:hover {
                    opacity: 0.9;
                }

                @media (max-width: 768px) {
                    .box-area {
                        padding: 20px;
                    }

                    .header-text h2 {
                        font-size: 1.5rem;
                    }

                    .header-text p {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </>
    );
}