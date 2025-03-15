import Head from 'next/head';
import Link from 'next/link';

export default function SignUpPage() {
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

                            {/* Nome Completo */}
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Nome completo"
                                />
                            </div>

                            {/* Email */}
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Senha */}
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Senha"
                                />
                            </div>

                            {/* Confirmar Senha */}
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Confirmar senha"
                                />
                            </div>

                            {/* Botão de Cadastro */}
                            <div className="input-group mb-3">
                                <button
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    className="btn btn-lg w-100 fs-6 btn-brand2 me-2"
                                    style={{ backgroundColor: 'rgb(12, 129, 28)', borderRadius: '5%' }}
                                >
                                    <Link href="/dashboard" style={{ color: 'rgb(255, 255, 255)' }}>
                                        Cadastrar
                                    </Link>
                                </button>
                            </div>

                            {/* Link para Login */}
                            <div className="row">
                                <small>
                                    Já tem uma conta? <Link href="/login">Faça login</Link>
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