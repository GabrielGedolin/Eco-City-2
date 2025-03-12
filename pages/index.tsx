import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Adicionando o Bootstrap via CDN */}
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <title>Eco City</title>
      </Head>

      {/* Navbar */}
      <nav className="position-fixed w-100 navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span>Eco</span> <span>City</span>
          </a>
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
                <a className="nav-link active" href="/">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sobre">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/zonas">
                  Zonas de adoção
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contato">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
                </div>
              </div>
            </div>

            {/* Card 2 - Pontos de Coleta de Reciclagem */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Pontos de Coleta</h3>
                  <p className="card-text">
                    Encontre os pontos de coleta de reciclagem mais próximos de você.
                  </p>
                  <a href="/pontos-de-coleta" className="btn btn-success">
                    Ver Pontos
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 - Benefícios da Adoção */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Benefícios da Adoção</h3>
                  <p className="card-text">
                    Ao adotar uma área verde, sua empresa recebe selos de sustentabilidade.
                  </p>
                  <a href="/beneficios" className="btn btn-success">
                    Conheça os Benefícios
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 - Eventos de Sustentabilidade */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Eventos de Sustentabilidade</h3>
                  <p className="card-text">
                    Participe de eventos de plantio, limpeza e conscientização ambiental.
                  </p>
                  <a href="/eventos" className="btn btn-success">
                    Confira os Eventos
                  </a>
                </div>
              </div>
            </div>

            {/* Card 5 - Impacto Gerado */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Impacto Gerado</h3>
                  <p className="card-text">
                    Veja o impacto positivo que sua empresa ou comunidade está gerando.
                  </p>
                  <a href="/impacto" className="btn btn-success">
                    Veja o Impacto
                  </a>
                </div>
              </div>
            </div>

            {/* Card 6 - Cadastre-se */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Cadastre-se</h3>
                  <p className="card-text">
                    Mapa para vizualizar pontos de coleta.
                  </p>
                  <a href="/mapa" className="btn btn-success">
                    Ver Mapa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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
  );
};

export default Home;
