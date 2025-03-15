import Head from 'next/head';
import Link from 'next/link';

export default function TrabalheConoscoPage() {
    return (
        <>
            <Head>
                <title>Trabalhe Conosco - Eco City</title>
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
                {/* Trabalhe Conosco Container */}
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    {/* Right Box */}
                    <div className="col-md-12 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4 text-center">
                                <Link className="navbar-brand" href="#">
                                    <img src="/img/icon2.png" alt="Logo Eco City" />
                                </Link>
                                <h2>Trabalhe Conosco</h2>
                                <p>Junte-se à nossa equipe e faça parte da mudança!</p>
                            </div>

                            {/* Vagas Disponíveis */}
                            <div className="mb-4 text-content">
                                <h3>Vagas Disponíveis</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <h5>Desenvolvedor Full-Stack</h5>
                                        <p className="text-muted">Remoto · Tempo Integral</p>
                                        <Link href="/vaga/desenvolvedor-fullstack" className="btn btn-sm btn-primary">
                                            Saiba Mais
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <h5>Designer UX/UI</h5>
                                        <p className="text-muted">Remoto · Tempo Integral</p>
                                        <Link href="/vaga/designer-uxui" className="btn btn-sm btn-primary">
                                            Saiba Mais
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <h5>Analista de Sustentabilidade</h5>
                                        <p className="text-muted">Remoto · Meio Período</p>
                                        <Link href="/vaga/analista-sustentabilidade" className="btn btn-sm btn-primary">
                                            Saiba Mais
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Formulário de Candidatura */}
                            <div className="mb-4 text-content">
                                <h3>Envie Seu Currículo</h3>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="nome" className="form-label">Nome Completo</label>
                                        <input type="text" className="form-control" id="nome" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">E-mail</label>
                                        <input type="email" className="form-control" id="email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="vaga" className="form-label">Vaga de Interesse</label>
                                        <select className="form-select" id="vaga" required>
                                            <option value="">Selecione uma vaga</option>
                                            <option value="Desenvolvedor Full-Stack">Desenvolvedor Full-Stack</option>
                                            <option value="Designer UX/UI">Designer UX/UI</option>
                                            <option value="Analista de Sustentabilidade">Analista de Sustentabilidade</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="curriculo" className="form-label">Currículo (PDF)</label>
                                        <input type="file" className="form-control" id="curriculo" accept=".pdf" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mensagem" className="form-label">Mensagem</label>
                                        <textarea className="form-control" id="mensagem" rows={3}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Enviar Candidatura</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Estilos com Styled JSX */}
            <style jsx>{`
                .right-box {
                    padding: 40px 30px;
                }

                .right-box .header-text {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .right-box .header-text h2 {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #333;
                }

                .right-box .header-text p {
                    font-size: 1rem;
                    color: #666;
                }

                .text-content {
                    max-width: 800px; /* Limita a largura do conteúdo */
                    margin: 0 auto; /* Centraliza o conteúdo */
                }

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

                .list-group-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                @media (max-width: 768px) {
                    .right-box {
                        padding: 20px;
                    }

                    .text-content {
                        max-width: 100%; /* Em telas menores, o conteúdo ocupa 100% da largura */
                    }

                    .list-group-item {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .list-group-item .btn {
                        margin-top: 10px;
                    }
                }
            `}</style>
        </>
    );
}