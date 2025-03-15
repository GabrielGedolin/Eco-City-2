import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function RecuperarSenhaPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Um link de recuperação de senha foi enviado para: ${email}`);
        // Aqui você pode adicionar a lógica para enviar o e-mail de recuperação
    };

    return (
        <>
            <Head>
                <title>Recuperar Senha - Eco City</title>
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
            <div
                className="min-vh-100 min-vw-100 d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: "url(/img/background-2.jpg)", // Substitua pelo caminho da imagem de fundo
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                {/* Recuperar Senha Container */}
                <div className="container-fluid bg-white bg-opacity-75 p-4 rounded-5 shadow-lg" style={{ maxWidth: '500px' }}>
                    {/* Header */}
                    <div className="header-text mb-4 text-center">
                        <Link className="navbar-brand" href="/">
                            <img src="/img/icon2.png" alt="Logo Eco City" className="img-fluid" style={{ maxWidth: '150px' }} />
                        </Link>
                        <h2>Recuperar Senha</h2>
                        <p>Insira seu e-mail para receber um link de recuperação.</p>
                    </div>

                    {/* Formulário */}
                    <form onSubmit={handleSubmit}>
                        {/* Campo de E-mail */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Botão de Envio */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary w-100">
                                Enviar Link de Recuperação
                            </button>
                        </div>
                    </form>

                    {/* Link para Voltar ao Login */}
                    <div className="text-center mt-3">
                        <Link href="/sign-in" className="text-decoration-none">
                            Voltar ao Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Estilos com Styled JSX */}
            <style jsx>{`
                .btn-primary {
                    background-color: rgb(12, 129, 28);
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-size: 1rem;
                    transition: background-color 0.3s ease;
                }

                .btn-primary:hover {
                    background-color: rgb(9, 99, 21);
                }

                @media (max-width: 768px) {
                    .container-fluid {
                        padding: 20px;
                    }
                }
            `}</style>
        </>
    );
}