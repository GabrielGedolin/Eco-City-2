    import Head from 'next/head';
    import Link from 'next/link';
    import { useState } from 'react';

    export default function DenunciasSolicitacoesPage() {
        const [tipo, setTipo] = useState('denuncia'); // 'denuncia' ou 'solicitacao'
        const [descricao, setDescricao] = useState('');
        const [localizacao, setLocalizacao] = useState('');
        const [mensagem, setMensagem] = useState('');

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            alert(`Formulário enviado com sucesso!\nTipo: ${tipo}\nDescrição: ${descricao}\nLocalização: ${localizacao}\nMensagem: ${mensagem}`);
            // Aqui você pode adicionar a lógica para enviar os dados para o backend
        };

        return (
            <>
                <Head>
                    <title>Denúncias e Solicitações - Eco City</title>
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
                        backgroundImage: "url(/img/background-2.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    {/* Denúncias e Solicitações Container */}
                    <div className="container-fluid bg-white bg-opacity-75 p-4 rounded-5 shadow-lg" style={{ maxWidth: '800px' }}>
                        {/* Header */}
                        <div className="header-text mb-4 text-center">
                            <Link className="navbar-brand" href="/">
                                <img src="/img/icon2.png" alt="Logo Eco City" className="img-fluid" style={{ maxWidth: '150px' }} />
                            </Link>
                            <h2>Denúncias e Solicitações</h2>
                            <p>Relate descartes irregulares ou solicite novos pontos de coleta.</p>
                        </div>

                        {/* Formulário */}
                        <form onSubmit={handleSubmit}>
                            {/* Tipo (Denúncia ou Solicitação) */}
                            <div className="mb-3">
                                <label htmlFor="tipo" className="form-label">Tipo</label>
                                <select
                                    className="form-select"
                                    id="tipo"
                                    value={tipo}
                                    onChange={(e) => setTipo(e.target.value)}
                                    required
                                >
                                    <option value="denuncia">Denúncia de Descarte Irregular</option>
                                    <option value="solicitacao">Solicitação de Novo Ponto de Coleta</option>
                                </select>
                            </div>

                            {/* Descrição */}
                            <div className="mb-3">
                                <label htmlFor="descricao" className="form-label">Descrição</label>
                                <textarea
                                    className="form-control"
                                    id="descricao"
                                    rows={3}
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            {/* Localização */}
                            <div className="mb-3">
                                <label htmlFor="localizacao" className="form-label">Localização</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="localizacao"
                                    value={localizacao}
                                    onChange={(e) => setLocalizacao(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Mensagem Adicional */}
                            <div className="mb-3">
                                <label htmlFor="mensagem" className="form-label">Mensagem Adicional</label>
                                <textarea
                                    className="form-control"
                                    id="mensagem"
                                    rows={3}
                                    value={mensagem}
                                    onChange={(e) => setMensagem(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Botão de Envio */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    Enviar
                                </button>
                            </div>
                        </form>
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