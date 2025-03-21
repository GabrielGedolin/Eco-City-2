import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                localStorage.setItem('token', result.token);
                console.log('Token salvo:', result.token);
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
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Login</title>
                <link rel="icon" href="assets/images/icon.png" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" />
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                <link rel="stylesheet" href="./assets/css/style.css" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
            </Head>

            <Script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" />
            <Script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" />
            <Script src="https://unpkg.com/aos@next/dist/aos.js" />
            <Script src="script/script.js" />


            <main data-bs-spy="scroll" data-bs-target=".navbar">
                 <nav className="navbar navbar-expand-lg sticky-top bg-light bg-opacity-50">
                     <div className="container-fluid">
                        <Link href="/" passHref className="navbar-brand">
                          <img src="/img/Logo1.png" alt="ECO CITY Logo" />
                        </Link>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarNav">
                             <ul className="navbar-nav ms-auto">
                                 <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
                                 <li className="nav-item"><a className="nav-link" href="#about">Sobre</a></li>
                                 <li className="nav-item"><a className="nav-link" href="#team">Equipe</a></li>
                                 <li className="nav-item"><a className="nav-link" href="#contact">Sign in</a></li>
                                 <li className="nav-item"><a className="nav-link" href="#blog">Sign up</a></li>
                                 <li className="nav-item"><a className="nav-link" href="users.html">Usuários</a></li>
                             </ul>
                         </div>
                     </div>
                 </nav>

                <div className="container-fluid vh-100">
                    <main>
                        <h1 id="title-t" className="text-uppercase btn-brand text-gradient fw-semibold display-5">Usuários</h1>

                        <table className="table table-sm table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Senha</th>
                                </tr>
                            </thead>
                            <tbody id="tb-localizacao">
                            </tbody>
                        </table>
                        <div className="row justify-content-end mx-2">
                            <a className="btn btn-sm btn-brand2 w-25" href="cadastro.html">Novo</a>
                        </div>
                    </main>
                </div>

                <footer className="bg-dark">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row gy-5">
                                <div className="col-lg-3 col-sm-6">
                                    <a href="#"><img src="./assets/images/icon.png" alt="" /></a>
                                    <div className="line"></div>
                                    <p>ECO SCHOOL sempre buscando o melhor pra você e para o Mundo.</p>
                                    <div className="social-icons">
                                        <a href="https://github.com/gualvesx/TCC.git"><i className="ri-github-fill"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <h5 className="mb-0 text-white">SERVIÇOS</h5>
                                    <div className="line"></div>
                                    <ul>
                                        <li><a href="#">Mapa Interativo</a></li>
                                        <li><a href="#">Reciclagem</a></li>
                                        <li><a href="#">Denúncias</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <h5 className="mb-0 text-white">SOBRE</h5>
                                    <div className="line"></div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Serviçoes</a></li>
                                        <li><a href="#">Compania</a></li>
                                        <li><a href="#">Career</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <h5 className="mb-0 text-white">CONTATO</h5>
                                    <div className="line"></div>
                                    <ul>
                                        <li>Presidente P.</li>
                                        <li>(18) 98712 - 2539</li>
                                        <li>gustavo.sesi.bol@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row g-4 justify-content-between">
                                <div className="col-auto">
                                    <p className="mb-0">© Copyright ECO SCHOOL All Rights Reserved</p>
                                </div>
                                <div className="col-auto">
                                    <p className="mb-0">Designed By GUSTAVO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>

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
