import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Carrega o componente do mapa dinamicamente (apenas no cliente)
const MapComponent = dynamic(() => import('../components/MapaComponent'), { ssr: false });

const Home = () => {
  useEffect(() => {
    // Verifica se está no cliente antes de carregar o AOS
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        offset: 120,
        delay: 0,
        duration: 900,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
      });
    }
  }, []);

  return (
<<<<<<< HEAD
    <>
=======
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Adicionando o Bootstrap via CDN */}
>>>>>>> 6e8ae99e61044229f13f56f47e0cb2b6d7892ba3
      <Head>
        {/* Remova os links de estilo daqui */}
        <title>ECO CITY</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/img/Logo1.png" />
      </Head>

      <body data-bs-spy="scroll" data-bs-target=".navbar">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg sticky-top bg-light bg-opacity-50">
          <div className="container">
            <Link href="/" passHref className='navbar-brand'>
              
                <img src="/img/Logo1.png" 
                  alt="ECO CITY Logo"
                />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/sobre">
                    Sobre
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/mapa">
                    Mapa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/login">
                    Sing In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#blog">
                    Sing Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

<<<<<<< HEAD
        {/* HERO */}
        <section id="hero" className="min-vh-100 d-flex align-items-center text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 data-aos="fade-left" className="text-uppercase text-gradient fw-semibold display-1">
                  Seja bem-vindo ao
                </h1>
                <h1 data-aos="fade-left" className="text-uppercase text-gradient2 fw-semibold display-1" id="h11">
                  ECO CITY
                </h1>
                <h5 className="text-white mt-3 mb-4" data-aos="fade-right">
                  Transforme sua Cidade, Transforme o Planeta!
                </h5>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="about" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="50">
                <div className="section-title">
                  <h1 className="display-4 fw-semibold">Sobre nós</h1>
                  <div className="line"></div>
                  <p>NÓS SOMOS UM GRUPO DE DEV'S QUE BUSCAM SOLUÇÕES ECOLÓGICAS</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="50" style={{ marginTop: '20px' }}>
                  <Link href="/sobre" className="btn btn-brand2 me-2" style={{ borderRadius: '5%' }}>
                    Ver Mais
                  </Link>
=======
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          minHeight: "100vh",
          height: "auto",
          backgroundColor: "#28a745",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "60px",
          paddingBottom: "40px",
        }}
      >
        <div className="container">
          <h1 className="hero-title display-3 display-md-2 display-lg-1">
            <span className="gradient-text">Transforme sua cidade</span>
            <br />
            com o <span className="gradient-text">Eco City</span>
          </h1>

          {/* Texto com efeito de digitação */}
          <div id='div-texto' className="typing-container text-center mx-2 mx-md-0">
            <p id='texto' className="typing-text">
              Discarte os resíduos corretamente, promova a sustentabilidade.
            </p>
          </div>

          {/* Botões */}
          <div className="d-flex flex-column flex-md-row justify-content-center mt-4">
            <a href="/pontos" className="btn btn-success btn-lg me-md-3 mb-3 mb-md-0">
              Explorar Pontos de Coleta
            </a>
            <a href="/zonas" className="btn btn-success btn-lg">
              Explorar Zonas Verdes
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id='features'
        className="features-section"
        style={{
          backgroundColor: "#000000",
          color: "white",
          padding: "80px 0",
          minHeight: "90vh",
          height: "auto",
          paddingTop: "100px",
        }}
      >
        <h1 className="features-title text-center mb-5">
          O que oferecemos?
        </h1>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Adote uma Área Verde</h3>
                  <p className="card-text">
                    Empresas, adotem uma área verde e contribua para a preservação do meio ambiente.
                  </p>
                  <a href="/adocao" className="btn btn-success">
                    Saiba Mais
                  </a>
>>>>>>> 6e8ae99e61044229f13f56f47e0cb2b6d7892ba3
                </div>
              </div>
            </div>
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6" data-aos="fade-down" data-aos-delay="50">
                {/* Mapa */}
                <MapComponent />
                <div data-aos="fade-up" data-aos-delay="50" style={{ marginTop: '20px' }}>
                  <Link href="/mapa" className="btn btn-brand me-2" style={{ borderRadius: '5%' }}>
                    Ver Mapa
                  </Link>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="150" className="col-lg-5">
                <h1>ECOLOGIA</h1>
                <p className="mt-3 mb-4">Um projeto de combate à poluição.</p>

                <div className="d-flex pt-4 mb-3">
                  <div
                    className="iconbox me-4"
                    style={{ borderRadius: '20%', overflow: 'hidden', padding: '10px', background: '#f0f0f0' }}
                  >
                    <i>
                      <img src="/img/point.png" alt="Ponto de Coleta" />
                    </i>
                  </div>
                  <div>
                    <h5>Encontre pontos de coleta próximos</h5>
                    <p>
                      Descubra locais adequados para descartar seus resíduos eletrônicos e recicláveis com nosso Mapa
                      Verde: Encontre, Recicle, Preserve!.
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <div
                    className="iconbox me-4"
                    style={{ borderRadius: '20%', overflow: 'hidden', padding: '10px', background: '#f0f0f0' }}
                  >
                    <i>
                      <img src="/img/reciclar.png" alt="Reciclar" />
                    </i>
                  </div>
                  <div>
                    <h5>Saiba como reciclar corretamente</h5>
                    <p>
                      Acesse informações detalhadas sobre a reciclagem de eletrônicos, seus impactos ambientais e como
                      descartar cada tipo de resíduo da melhor forma.
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div
                    className="iconbox me-4"
                    style={{ borderRadius: '20%', overflow: 'hidden', padding: '10px', background: '#f0f0f0' }}
                  >
                    <i className="ri-rocket-2-fill"></i>
                  </div>
                  <div>
                    <h5>Receba notificações e participe de eventos</h5>
                    <p>
                      Fique por dentro de campanhas, mutirões de reciclagem e iniciativas ambientais na sua cidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTER */}
        <section
          id="counter"
          className="section-padding d-flex align-items-center"
          style={{
            background:
              "url('https://images.pexels.com/photos/589802/pexels-photo-589802.jpeg?cs=srgb&dl=pexels-valiphotos-589802.jpg&fm=jpg') no-repeat center center/cover",
            height: '100vh',
          }}
        >
          <div className="container d-flex flex-column justify-content-center align-items-center text-center">
            <div className="row g-4">
              <div className="col-lg-12" data-aos="fade-down" data-aos-delay="250">
                <div
                  className="p-4 rounded"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '10px',
                  }}
                >
                  <h1 className="text-dark display-6">Educação e Sustentabilidade Caminham Juntas</h1>
                  <h6 className="text-uppercase mb-0 text-dark mt-3">Cada Ponto de Coleta, Um Passo para o Futuro!</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="services" className="section-padding border-top">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                <div className="section-title">
                  <h1 className="display-4 fw-semibold">SERVIÇOS</h1>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="row g-4 text-center">
              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="150">
                <div className="service theme-shadow p-lg-5 p-4 bg-light">
                  <div className="iconbox">
                    <i className="fa-solid fa-map"></i>
                  </div>
                  <h5 className="mt-4 mb-3">Mapa Interativo</h5>
                  <p>Mostra locais de coleta próximos, filtrados por tipo de resíduo.</p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="250">
                <div className="service theme-shadow p-lg-5 p-4 bg-light">
                  <div className="iconbox">
                    <i className="fa-solid fa-file-contract"></i>
                  </div>
                  <h5 className="mt-4 mb-3">Informações sobre Reciclagem</h5>
                  <p>Contagem de coletas por.</p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="350">
                <div className="service theme-shadow p-lg-5 p-4 bg-light">
                  <div className="iconbox">
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                  <h5 className="mt-4 mb-3">Agenda de Coleta e Eventos</h5>
                  <p>Informações sobre mutirões de reciclagem e feiras ecológicas.</p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="450">
                <div className="service theme-shadow p-lg-5 p-4 bg-light">
                  <div className="iconbox">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <h5 className="mt-4 mb-3">Cadastro de Usuário</h5>
                  <p>Ao se cadastrar pode-se solicitar pontos novos de coleta.</p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="550">
                <div className="service theme-shadow p-lg-5 p-4 bg-light">
                  <div className="iconbox">
                    <i className="ri-code-box-line"></i>
                  </div>
                  <h5 className="mt-4 mb-3">Blog e Notícias Ambientais</h5>
                  <p>Dicas ecológicas, novidades sobre reciclagem e meio ambiente e tendências sustentáveis.</p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="650">
                <div className="service theme-shadow p-lg-5 p-4 bg-light">
                  <div className="iconbox">
                    <i className="fa-solid fa-magnifying-glass-location"></i>
                  </div>
                  <h5 className="mt-4 mb-3">Denúncias e Solicitações</h5>
                  <p>
                    Espaço para relatar descarte irregular na cidade e solicitação de instalação de novos pontos de
                    coleta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="section-padding">
          <div className="container-fluid bg-light py-5 px-4" style={{ borderRadius: '5%' }}>
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                <div className="section-title">
                  <div className="line"></div>
                  <h5 className="mt-4 mb-3">Apoie a causa.</h5>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-4 aos-init aos-animate" data-aos="fade-down" data-aos-delay="150">
                <div className="portfolio-item image-zoom">
                  <div className="image-zoom-wrapper" style={{ borderRadius: '5%' }}>
                    <img src="/img/project-1.png" alt="Projeto 1"/>
                  </div>
                  <a href="/assets/images/project-1.png" data-fancybox="gallery" className="iconbox">
                    <i className="ri-search-2-line"></i>
                  </a>
                </div>
                <div className="portfolio-item image-zoom mt-4">
                  <div className="image-zoom-wrapper" style={{ borderRadius: '5%' }}>
                    <img src="/img/project-2.png" alt="Projeto 2" />
                  </div>
                  <a href="/assets/images/project-2.png" data-fancybox="gallery" className="iconbox">
                    <i className="ri-search-2-line"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-down" data-aos-delay="250">
                <div className="portfolio-item image-zoom">
                  <div className="image-zoom-wrapper" style={{ borderRadius: '5%' }}>
                    <img src="/img/project-3.png" alt="Projeto 3" />
                  </div>
                  <a href="/img/project-3.png" data-fancybox="gallery" className="iconbox">
                    <i className="ri-search-2-line"></i>
                  </a>
                </div>
                <div className="portfolio-item image-zoom mt-4">
                  <div className="image-zoom-wrapper" style={{ borderRadius: '5%' }}>
                    <img src="/img/project-4.png" alt="Projeto 4" />
                  </div>
                  <a href="/img/project-4.png" data-fancybox="gallery" className="iconbox">
                    <i className="ri-search-2-line"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-down" data-aos-delay="350">
                <div className="portfolio-item image-zoom">
                  <div className="image-zoom-wrapper" style={{ borderRadius: '5%' }}>
                    <img
                      src="https://greeneletron.org.br/blog/wp-content/uploads/2022/07/reciclagem2.jpg"
                      alt="Reciclagem"
                    />
                  </div>
                  <a
                    href="https://greeneletron.org.br/blog/wp-content/uploads/2022/07/reciclagem2.jpg"
                    data-fancybox="gallery"
                    className="iconbox"
                  >
                    <i className="ri-search-2-line"></i>
                  </a>
                </div>
                <div className="portfolio-item image-zoom mt-4">
                  <div className="image-zoom-wrapper" style={{ borderRadius: '5%' }}>
                    <img src="/img/project-6.png" alt="Projeto 6" />
                  </div>
                  <a href="/img/project-6.png" data-fancybox="gallery" className="iconbox">
                    <i className="ri-search-2-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-dark">
          <div className="footer-top">
            <div className="container">
              <div className="row gy-5">
                <div className="col-lg-3 col-sm-6">
                  <a href="#">
                    <img src="/assets/images/logo1.png" alt="ECO CITY Logo" />
                  </a>
                  <div className="line"></div>
                  <p>ECO CITY sempre buscando o melhor pra você e para o Mundo.</p>
                  <div className="social-icons">
                    <a href="https://github.com/GabrielGedolin/eco-city-2.git">
                      <i className="ri-github-fill"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h5 className="mb-0 text-white">SERVIÇOS</h5>
                  <div className="line"></div>
                  <ul>
                    <li>
                      <a href="#">Mapa Interativo</a>
                    </li>
                    <li>
                      <a href="#">Reciclagem</a>
                    </li>
                    <li>
                      <a href="#">Denúncias</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h5 className="mb-0 text-white">SOBRE</h5>
                  <div className="line"></div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Serviçoes</a>
                    </li>
                    <li>
                      <a href="#">Compania</a>
                    </li>
                    <li>
                      <a href="/sobre">Sobre</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h5 className="mb-0 text-white">CONTATO</h5>
                  <div className="line"></div>
                  <ul>
                    <li>Presidente P.</li>
                    <li>(18) 98712 - 2539</li>
                    <li>(18) 99676 - 9535</li>
                    <li>gustavo.sesi.bol@gmail.com</li>
                    <li>gabrielgedoli@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row g-4 justify-content-between">
                <div className="col-auto">
                  <p className="mb-0">© Copyright ECO CITY All Rights Reserved</p>
                </div>
                <div className="col-auto">
                  <p className="mb-0">Designed By GUSTAVO/GABRIEL</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

<<<<<<< HEAD
        {/* SCRIPTS */}
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script src="https://kit.fontawesome.com/3a47ab78fd.js"></script>
      </body>
    </>
=======
      {/* Estilos Personalizados */}
      <style jsx>{`
        /* Estilos Globais */
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: auto;
        }

        nav {
          width: 100%;
          left: 0;
          right: 0;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        .hero-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background-image: linear-gradient(to right, white, rgb(21, 255, 0));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .typing-container {
          display: inline-block;
          position: relative;
          max-width: 100%;
          overflow: hidden;
          padding: 0 10px;
        }

        .typing-text {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 0.15em solid rgb(21, 255, 0);
          font-family: monospace;
          font-size: clamp(1rem, 4vw, 1.5rem);
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: rgb(21, 255, 0); }
        }

        .button-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .botao {
          margin-top:10px;
          margin-left:10px;
          background-color: green;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          transition: background-color 0.3s ease;
          padding: 0.8rem 1.5rem;
          display: inline-block;
          border: none;
          cursor: pointer;
        }

        .botao:hover {
          background-color: darkgreen;
        }

        .features-title {
          font-family: monospace;
          text-align: center;
          margin-bottom: 50px;
        }

        .feature-card {
          background: linear-gradient(135deg, #1e7e34, #28a745);
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 20px;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }

        /* Responsividade com @media */
        @media (max-width: 991px) {
          #texto {
            white-space: normal; /* Permite que o texto quebre em várias linhas */
          }

          #div-texto {
            width: 90%; /* Ajusta a largura do container */
            max-width: 90%; /* Limita a largura máxima */
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .typing-text {
            font-size: 1.2rem;
          }

          .button-container {
            flex-direction: column;
          }

          .feature-card {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .typing-text {
            font-size: 1rem;
          }

          .botao {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }

          .feature-card {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 375px) {
          .hero-title {
            font-size: 1.5rem;
          }

          .typing-text {
            font-size: 0.8rem;
          }

          .botao {
            padding: 0.4rem 0.8rem;
            font-size: 0.7rem;
          }

          .feature-card {
            margin-bottom: 15px;
          }
        }

        @media (max-width: 320px) {
          .hero-title {
            font-size: 1.4rem;
          }

          .typing-text {
            font-size: 0.7rem;
          }

          .botao {
            padding: 0.3rem 0.6rem;
            font-size: 0.6rem;
          }

          .feature-card {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
>>>>>>> 6e8ae99e61044229f13f56f47e0cb2b6d7892ba3
  );
};

export default Home;
