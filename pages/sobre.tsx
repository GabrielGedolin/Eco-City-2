import Head from 'next/head';
import Link from 'next/link';

export default function SobrePage() {
    return (
        <>
            <Head>
                <title>Sobre - Eco City</title>
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
                
            >
                {/* Sobre Container */}
                <div className="container-fluid bg-white bg-opacity-75 p-4 rounded-5 shadow-lg" style={{ maxWidth: '1200px' }}>
                    {/* Header */}
                    <div className="header-text mb-4 text-center">
                        <Link className="navbar-brand" href="/">
                            <img src="/img/icon2.png" alt="Logo Eco City" className="img-fluid" style={{ maxWidth: '150px' }} />
                        </Link>
                        <h2>Sobre Nós</h2>
                        <p>Conheça mais sobre a Eco City e nossa missão.</p>
                    </div>

                    {/* História */}
                    <div className="mb-4 text-content">
                        <h3>Nossa História</h3>
                        <p>
                            A Eco City foi fundada em 2010 por uma dupla de desenvolvedores apaixonados por tecnologia e sustentabilidade. Desde então, temos trabalhado incansavelmente para transformar cidades em ambientes mais verdes, inteligentes e eficientes. Nossa jornada começou com um pequeno projeto piloto e hoje impactamos mais de 100 cidades ao redor do mundo.
                        </p>
                    </div>

                    {/* Missão, Visão e Valores */}
                    <div className="mb-4 text-content">
                        <h3>Missão, Visão e Valores</h3>
                        <ul>
                            <li>
                                <strong>Missão:</strong> Criar cidades sustentáveis através de soluções inovadoras e acessíveis.
                            </li>
                            <li>
                                <strong>Visão:</strong> Ser referência global em planejamento urbano sustentável até 2030.
                            </li>
                            <li>
                                <strong>Valores:</strong> Sustentabilidade, Inovação, Integridade e Colaboração.
                            </li>
                        </ul>
                    </div>

                    {/* Equipe */}
                    <div className="mb-4 text-content">
                        <h3>Nossa Equipe</h3>
                        <div className="row">
                            {/* Pessoa 1 */}
                            <div className="col-md-6 text-center mb-4">
                                <div className="card h-100 bg-transparent border-0">
                                    <div className="card-body">
                                        <img
                                            src="/img/gustavo.png" // Substitua pelo caminho da imagem
                                            alt="Gustavo"
                                            className="img-fluid rounded-circle mb-3"
                                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                        />
                                        <h4>Gustavo Emanuel</h4>
                                        <p className="text-muted">Co-Fundador e Desenvolvedor</p>
                                        <p>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Pessoa 2 */}
                            <div className="col-md-6 text-center mb-4">
                                <div className="card h-100 bg-transparent border-0">
                                    <div className="card-body">
                                        <img
                                            src="/img/gabriel.jpg" // Substitua pelo caminho da imagem
                                            alt="Gabriel"
                                            className="img-fluid rounded-circle mb-3"
                                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                        />
                                        <h4>Gabriel</h4>
                                        <p className="text-muted">Co-Fundador e Desenvolvedor</p>
                                        <p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Diferenciais */}
                    <div className="mb-4 text-content">
                        <h3>O Que Nos Torna Únicos</h3>
                        <p>
                            Utilizamos tecnologia de ponta e metodologias inovadoras para garantir resultados eficientes e sustentáveis. Nossos projetos já impactaram positivamente mais de 100 cidades ao redor do mundo.
                        </p>
                    </div>

                    {/* Parcerias */}
                    <div className="mb-4 text-content">
                        <h3>Parcerias</h3>
                        <p>
                            Trabalhamos com governos, empresas e ONGs para criar cidades mais inteligentes e ecológicas. Nossos parceiros incluem organizações renomadas como a Green Future e a Urban Tech.
                        </p>
                    </div>

                    {/* Sustentabilidade */}
                    <div className="mb-4 text-content">
                        <h3>Sustentabilidade</h3>
                        <p>
                            Comprometidos com o meio ambiente, reduzimos nossa pegada de carbono em 50% nos últimos 5 anos. Todos os nossos projetos são desenvolvidos com foco em energia renovável e eficiência energética.
                        </p>
                    </div>

                    {/* Trabalhe Conosco */}
                    <div className="mb-4 text-content text-center">
                        <h3>Trabalhe Conosco</h3>
                        <p>
                            Quer fazer parte da nossa equipe? Confira nossas vagas e junte-se a nós na missão de criar um futuro sustentável.
                        </p>
                        <Link href="/trabalhe-conosco" className="btn btn-primary">
                            Ver Vagas
                        </Link>
                    </div>
                </div>
            </div>

            {/* Estilos com Styled JSX */}
            <style jsx>{`
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

                @media (max-width: 768px) {
                    .text-content {
                        max-width: 100%; /* Em telas menores, o conteúdo ocupa 100% da largura */
                    }
                }
            `}</style>
        </>
    );
}