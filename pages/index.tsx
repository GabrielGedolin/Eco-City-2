import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div style={{ height: "100vh" }}>
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
                  Pontos de Coleta
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
          height: "100vh",
          backgroundColor: "#28a745",
          color: "white",
<<<<<<< HEAD
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "60px",
        }}
      >
        <div className="container">
          <h1 className="hero-title">
            <span className="gradient-text">
              Transforme sua cidade
            </span>
            <br />
            com o <span className="gradient-text">Eco City</span>
=======
        }}
      >
        <div className="container text-center">
          <style jsx>{`
            @keyframes typing {
              from { width: 0; }
              to { width: 100%; }
            }

            @keyframes blink-caret {
              50% { border-color: transparent; }
            }

            .typing-container {
              display: inline-block;
              position: relative;
            }

            .typing-text {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              border-right: 0.15em solid rgb(21, 255, 0);
              animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
              font-family: monospace;
            }

            .botao {
              margin: 10px;
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

            .card-hover-effect {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .card-hover-effect:hover {
              transform: translateY(-10px);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
          `}</style>

          <h1 className="display-4">
            <span style={{
              backgroundImage: "linear-gradient(to right, white, rgb(21, 255, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Transforme sua cidade
            </span>
            <br />
            com o <span style={{
              backgroundImage: "linear-gradient(to left, white, rgb(21, 255, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Eco City</span>
>>>>>>> 5de312c3389206e705312bdf7feba63c1e245a12
          </h1>

          <div className="typing-container">
            <p className="typing-text">
              Discarte os resíduos corretamente, promova a sustentabilidade.
            </p>
          </div>
          <br />
<<<<<<< HEAD
          <div className="">
            <a href="/pontos" className="botao">
              Explorar Pontos de Coleta
            </a>
            <a href="/zonas" className="botao m-3">
=======
          <div className="d-flex flex-column flex-md-row justify-content-center">
            <a href="/pontos" className="botao">
              Explorar Pontos de Coleta
            </a>
            <a href="/zonas" className="botao">
>>>>>>> 5de312c3389206e705312bdf7feba63c1e245a12
              Explorar Zonas Verdes
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="features-section"
        style={{
          backgroundColor: "#000000",
          color: "white",
<<<<<<< HEAD
          padding: "80px 0",
          minHeight: "100vh",
        }}
      >
        <h1 className="features-title">
=======
          backgroundImage: "url('/path/to/your/pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            fontFamily: "monospace",
          }}
          className="text-center mb-5"
        >
>>>>>>> 5de312c3389206e705312bdf7feba63c1e245a12
          O que oferecemos?
        </h1>

        <div className="container">
<<<<<<< HEAD
          {/* Linha 1: 3 cards */}
          <div className="row justify-content-center mb-4">
            {/* Card 1 - Adoção de Áreas Verdes */}
            <div className="col-md-4">
              <div className="feature-card">
                <div className="card-content">
                  <h3>Adote uma Área Verde</h3>
                  <p>
=======
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {/* Card 1 - Adoção de Áreas Verdes */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Adote uma Área Verde</h3>
                  <p className="card-text">
>>>>>>> 5de312c3389206e705312bdf7feba63c1e245a12
                    Empresas, adotem uma área verde e contribua para a preservação do meio ambiente.
                  </p>
                  <a href="/adocao" className="btn btn-success">
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 - Pontos de Coleta de Reciclagem */}
<<<<<<< HEAD
            <div className="col-md-4">
              <div className="feature-card">
                <div className="card-content">
                  <h3>Pontos de Coleta</h3>
                  <p>
=======
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Pontos de Coleta</h3>
                  <p className="card-text">
>>>>>>> 5de312c3389206e705312bdf7feba63c1e245a12
                    Encontre os pontos de coleta de reciclagem mais próximos de você.
                  </p>
                  <a href="/pontos-de-coleta" className="btn btn-success">
                    Ver Pontos
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 - Benefícios da Adoção */}
<<<<<<< HEAD
            <div className="col-md-4">
              <div className="feature-card">
                <div className="card-content">
                  <h3>Benefícios da Adoção</h3>
                  <p>
=======
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Benefícios da Adoção</h3>
                  <p className="card-text">
>>>>>>> 5de312c3389206e705312bdf7feba63c1e245a12
                    Ao adotar uma área verde, sua empresa recebe selos de sustentabilidade.
                  </p>
                  <a href="/beneficios" className="btn btn-success">
                    Conheça os Benefícios
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Linha 2: 3 cards */}
          <div className="row justify-content-center">
            {/* Card 4 - Eventos de Sustentabilidade */}
<<<<<<< HEAD
            <div className="col-md-4">
              <div className="feature-card">
                <div className="card-content">
                  <h3>Eventos de Sustentabilidade</h3>
                  <p>
=======
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Eventos de Sustentabilidade</h3>
                  <p className="card-text">
>>>>>>> 5de312c3389206e705312bdf7feba63c1e245a12
                    Participe de eventos de plantio, limpeza e conscientização ambiental.
                  </p>
                  <a href="/eventos" className="btn btn-success">
                    Confira os Eventos
                  </a>
                </div>
              </div>
            </div>

            {/* Card 5 - Impacto Gerado */}
<<<<<<< HEAD
            <div className="col-md-4">
              <div className="feature-card">
                <div className="card-content">
                  <h3>Impacto Gerado</h3>
                  <p>
=======
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Impacto Gerado</h3>
                  <p className="card-text">
>>>>>>> 5de312c3389206e705312bdf7feba63c1e245a12
                    Veja o impacto positivo que sua empresa ou comunidade está gerando.
                  </p>
                  <a href="/impacto" className="btn btn-success">
                    Veja o Impacto
                  </a>
                </div>
              </div>
            </div>

            {/* Card 6 - Cadastre-se */}
<<<<<<< HEAD
            <div className="col-md-4">
              <div className="feature-card">
                <div className="card-content">
                  <h3>Cadastre-se</h3>
                  <p>
=======
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center">
                  <h3 className="card-title">Cadastre-se</h3>
                  <p className="card-text">
>>>>>>> 5de312c3389206e705312bdf7feba63c1e245a12
                    Empresas e cidadãos, cadastre-se na plataforma e comece a fazer parte dessa mudança.
                  </p>
                  <a href="/cadastro" className="btn btn-success">
                    Cadastre-se Agora
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
          overflow-x: hidden; /* Impede o scroll horizontal */
          width: 100vw;
          height: 100vh;
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
        }

        .typing-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 0.15em solid rgb(21, 255, 0);
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
          font-family: monospace;
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        /* Animações */
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: rgb(21, 255, 0);
          }
        }

        .button-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .botao {
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

        @media (max-width: 425px) {
          .hero-title {
            font-size: 1.6rem;
          }

          .typing-text {
            font-size: 0.9rem;
          }

          .botao {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .feature-card {
            margin-bottom: 15px;
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
            margin-bottom: 10px;
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
