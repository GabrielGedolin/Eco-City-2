import Head from 'next/head';
import Link from 'next/link';

export default function BlogPage() {
    // Dados de exemplo para os posts do blog
    const posts = [
        {
            id: 1,
            title: "Gustavo no matarazzo",
            description: "Aprendeu muito",
            date: "10 de Outubro de 2023",
            author: "João Silva",
        },
        {
            id: 2,
            title: "ricardo falando japones",
            description: "lindo demais",
            date: "15 de Outubro de 2023",
            author: "Maria Souza",
        },
        {
            id: 3,
            title: "Indio na floresta",
            description: "no final de tudo o importante foi ter amor recriproco",
            date: "20 de Outubro de 2023",
            author: "Carlos Oliveira",
        },
    ];

    return (
        <>
            <Head>
                <title>Blog - Eco City</title>
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
            <div className="container my-5">
                <h1 className="text-center mb-4">Blog Eco City</h1>

                {/* Lista de Posts */}
                <div className="row">
                    {posts.map((post) => (
                        <div key={post.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <div className="card-body">
                                    <h2 className="card-title">{post.title}</h2>
                                    <p className="card-text">{post.description}</p>
                                    <p className="text-muted">
                                        <small>
                                            Por {post.author} em {post.date}
                                        </small>
                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-0">
                                    <Link href={`/blog/${post.id}`} className="btn btn-primary">
                                        Ler Mais
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Estilos com Styled JSX */}
            <style jsx>{`
                .card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                }
                .card-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #333;
                }
                .card-text {
                    font-size: 1rem;
                    color: #666;
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
            `}</style>
        </>
    );
}