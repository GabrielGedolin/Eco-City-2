import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';

const Zonas = () => {
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
        <title>Pontos de Coleta - Eco City</title>
      </Head>

      {/* Navbar */}
      <nav className="position-fixed w-100 navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className=''>Eco</span> <span className=''>City</span>
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
                <Link href="/" className="nav-link active">
                  Início
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sobre" className="nav-link">
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/zonas" className="nav-link">
                  Pontos de Coleta
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contato" className="nav-link">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          height: "40vh", // Altura reduzida para a página de zonas
          backgroundColor: "#28a745", // Cor de fundo da hero section
          color: "white", // Cor do texto
        }}
      >
        <div className="container text-center">
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Pontos de Coleta em Presidente Prudente</h1>
          <p style={{ fontSize: '1.2rem' }}>Encontre os melhores locais para descartar resíduos recicláveis.</p>
        </div>
      </section>

      {/* Zonas Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {/* Ponto de Coleta 1 - Ferro Velho A */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 card-hover-effect">
                <img
                  src="/img/ferro-velho-a.jpg" // Adicione a imagem correspondente
                  className="card-img-top"
                  alt="Ferro Velho A"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold' }}>Ferro Velho A</h3>
                  <p className="card-text" style={{ color: '#555' }}>
                    Aceita metais, eletrônicos e sucatas em geral.
                  </p>
                  <Link href="/mapa" className="btn btn-success">
                    Visualizar no Mapa
                  </Link>
                </div>
              </div>
            </div>

            {/* Ponto de Coleta 2 - Cooperativa de Reciclagem */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 card-hover-effect">
                <img
                  src="/img/cooperativa.jpg" // Adicione a imagem correspondente
                  className="card-img-top"
                  alt="Cooperativa de Reciclagem"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold' }}>Cooperativa de Reciclagem</h3>
                  <p className="card-text" style={{ color: '#555' }}>
                    Recebe papel, plástico, vidro e metais.
                  </p>
                  <Link href="/mapa" className="btn btn-success">
                    Visualizar no Mapa
                  </Link>
                </div>
              </div>
            </div>

            {/* Ponto de Coleta 3 - Ecoponto Centro */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 card-hover-effect">
                <img
                  src="/img/ecoponto-centro.jpg" // Adicione a imagem correspondente
                  className="card-img-top"
                  alt="Ecoponto Centro"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold' }}>Ecoponto Centro</h3>
                  <p className="card-text" style={{ color: '#555' }}>
                    Local para descarte de resíduos recicláveis e eletrônicos.
                  </p>
                  <Link href="/mapa" className="btn btn-success">
                    Visualizar no Mapa
                  </Link>
                </div>
              </div>
            </div>

            {/* Ponto de Coleta 4 - Ferro Velho B */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 card-hover-effect">
                <img
                  src="/img/ferro-velho-b.jpg" // Adicione a imagem correspondente
                  className="card-img-top"
                  alt="Ferro Velho B"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold' }}>Ferro Velho B</h3>
                  <p className="card-text" style={{ color: '#555' }}>
                    Aceita metais, eletrônicos e sucatas em geral.
                  </p>
                  <Link href="/mapa" className="btn btn-success">
                    Visualizar no Mapa
                  </Link>
                </div>
              </div>
            </div>

            {/* Ponto de Coleta 5 - Posto de Coleta de Óleo */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 card-hover-effect">
                <img
                  src="/img/posto-oleo.jpg" // Adicione a imagem correspondente
                  className="card-img-top"
                  alt="Posto de Coleta de Óleo"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold' }}>Posto de Coleta de Óleo</h3>
                  <p className="card-text" style={{ color: '#555' }}>
                    Descarte de óleo de cozinha usado.
                  </p>
                  <Link href="/mapa" className="btn btn-success">
                    Visualizar no Mapa
                  </Link>
                </div>
              </div>
            </div>

            {/* Ponto de Coleta 6 - Recicla Prudente */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 card-hover-effect">
                <img
                  src="/img/recicla-prudente.jpg" // Adicione a imagem correspondente
                  className="card-img-top"
                  alt="Recicla Prudente"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold' }}>Recicla Prudente</h3>
                  <p className="card-text" style={{ color: '#555' }}>
                    Recebe plástico, papel, vidro e metais.
                  </p>
                  <Link href="/mapa" className="btn btn-success">
                    Visualizar no Mapa
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Estilos Personalizados */}
      <style jsx>{`
        .card-hover-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-hover-effect:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default Zonas;