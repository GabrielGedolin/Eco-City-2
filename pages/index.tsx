import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1 className="hero-title">
            <span className="gradient-text">
              Transforme sua cidade
            </span>
            <br />
            com o <span className="gradient-text">Eco City</span>
          </h1>

          <div className="typing-container">
            <p className="typing-text">
              Discarte os resíduos corretamente, promova a sustentabilidade.
            </p>
          </div>
          <br />
          <div className="button-container">
            <a href="/pontos" className="botao">
              Explorar Pontos de Coleta
            </a>
            <a href="/zonas" className="botao">
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
          padding: "50px 0",
          minHeight: "100vh",
        }}
      >
        <h1 className="features-title">
          O que oferecemos?
        </h1>

        <div className="container">
          <div className="features-grid">
            {/* Card 1 - Adoção de Áreas Verdes */}
            <div className="feature-card">
              <div className="card-content">
                <h3>Adote uma Área Verde</h3>
                <p>
                  Empresas, adotem uma área verde e contribua para a preservação do meio ambiente.
                </p>
                <a href="/adocao" className="btn btn-success">
                  Saiba Mais
                </a>
              </div>
            </div>

            {/* Repita os outros cards com a mesma estrutura */}
          </div>
        </div>
      </section>

      <Footer />

      {/* Estilos Personalizados */}
      <style jsx>{`
        /* Estilos Globais */
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .feature-card {
          background: linear-gradient(135deg, #1e7e34, #28a745);
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
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

          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.5rem;
          }

          .typing-text {
            font-size: 1rem;
          }

          .botao {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
