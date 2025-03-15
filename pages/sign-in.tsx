import Head from 'next/head';
import Link from 'next/link';

export default function LoginPage() {
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
                <link rel="stylesheet" href="/assets/css/style.css" />
            </Head>

            {/* Main Container */}
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                
                {/* Login Container */}
                <div className="row border rounded-5 p-3 bg-white shadow box-area">

                    {/* Left Box */}
                    <div
                    className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                    style={{ 
                        zIndex: 3, // z-index como número (não precisa de aspas)
                        backgroundImage: 'url(/img/background.jpg)', // Caminho da imagem de fundo
                        backgroundSize: 'cover', // Garante que a imagem cubra todo o espaço
                        backgroundPosition: 'center', // Centraliza a imagem de fundo
                        position: 'relative', // Permite o uso de z-index
                        minHeight: '400px' // Define uma altura mínima para o container
                    }}
                >
                    {/* Container para o conteúdo */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center"> {/* Centraliza o conteúdo */}
                                {/* Título "Eco City" */}
                                <h1 
                                    data-aos="fade-left" // Animação com AOS
                                    style={{ 
                                        zIndex: 10, // z-index maior para garantir que fique acima
                                        color: "#fff", // Cor do texto (branco)
                                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" // Sombra para melhorar a legibilidade
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
                                />
                            </div>
                            <div className="input-group mb-1">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Password"
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
                                >
                                    <Link href="/index" style={{ color: 'rgb(255, 255, 255)' }}>
                                        Login
                                    </Link>
                                </button>
                            </div>
                            <div className="input-group mb-3">
                                <button
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    className="btn btn-lg w-100 fs-6 btn-brand2 me-2"
                                    style={{ backgroundColor: 'rgb(0, 0, 0)', borderRadius: '5%' }}
                                >
                                    <Link href="/index" style={{ color: 'rgb(255, 255, 255)' }}>
                                        Ver Mais
                                    </Link>
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

            <script src="https://kit.fontawesome.com/3a47ab78fd.js" crossOrigin="anonymous"></script>
        </>
    );
}