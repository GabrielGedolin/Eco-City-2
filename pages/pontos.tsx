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
      <nav style={{zIndex:"10"
      }} className="position-fixed w-100 navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
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
                  Zonas de adoção
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
          height: "50vh", // Altura da seção
          backgroundColor: "#28a745", // Cor de fundo
          color: "white", // Cor do texto
          paddingTop: "56px", // Compensar a altura da navbar
        }}
      >
        <div className="text-center">
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Pontos de Coleta em Presidente Prudente</h1>
          <p style={{ fontSize: '1.2rem' }}>Encontre os melhores locais para descartar resíduos recicláveis.</p>
        </div>
      </section>

      {/* Zonas Section */}
      <section className="py-5" style={{ backgroundColor: '#000', paddingTop: '56px' }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {/* Ponto de Coleta 1 - Ferro Velho A */}
            <div className="col">
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  animation: 'fadeIn 1s ease-in-out',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  backgroundColor: '#111',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(40, 167, 69, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.1)';
                }}
              >
                <img
                  src="/img/ferro-velho-a.jpg"
                  className="card-img-top"
                  alt="Ferro Velho A"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Ferro Velho A
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Aceita metais, eletrônicos e sucatas em geral.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar no Mapa
                  </Link>
                </div>
              </div>
            </div>

            {/* Ponto de Coleta 2 - Cooperativa de Reciclagem */}
            <div className="col">
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  animation: 'fadeIn 1s ease-in-out',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  backgroundColor: '#111',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(40, 167, 69, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.1)';
                }}
              >
                <img
                  src="/img/cooperativa.jpg"
                  className="card-img-top"
                  alt="Cooperativa de Reciclagem"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Cooperativa de Reciclagem
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Recebe papel, plástico, vidro e metais.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar no Mapa
                  </Link>
                </div>
              </div>
            </div>

            {/* Ponto de Coleta 3 - Ecoponto Centro */}
            <div className="col">
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  animation: 'fadeIn 1s ease-in-out',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  backgroundColor: '#111',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(40, 167, 69, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.1)';
                }}
              >
                <img
                  src="/img/ecoponto-centro.jpg"
                  className="card-img-top"
                  alt="Ecoponto Centro"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Ecoponto Centro
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Local para descarte de resíduos recicláveis e eletrônicos.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar no Mapa
                  </Link>
                </div>
              </div>
            </div>

            {/* Ponto de Coleta 4 - Ferro Velho B */}
            <div className="col">
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  animation: 'fadeIn 1s ease-in-out',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  backgroundColor: '#111',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(40, 167, 69, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.1)';
                }}
              >
                <img
                  src="/img/ferro-velho-b.jpg"
                  className="card-img-top"
                  alt="Ferro Velho B"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Ferro Velho B
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Aceita metais, eletrônicos e sucatas em geral.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar no Mapa
                  </Link>
                </div>
              </div>
            </div>

            {/* Ponto de Coleta 5 - Posto de Coleta de Óleo */}
            <div className="col">
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  animation: 'fadeIn 1s ease-in-out',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  backgroundColor: '#111',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(40, 167, 69, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.1)';
                }}
              >
                <img
                  src="/img/posto-oleo.jpg"
                  className="card-img-top"
                  alt="Posto de Coleta de Óleo"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Posto de Coleta de Óleo
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Descarte de óleo de cozinha usado.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar no Mapa
                  </Link>
                </div>
              </div>
            </div>

            {/* Ponto de Coleta 6 - Recicla Prudente */}
            <div className="col">
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  animation: 'fadeIn 1s ease-in-out',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  backgroundColor: '#111',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(40, 167, 69, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.1)';
                }}
              >
                <img
                  src="/img/recicla-prudente.jpg"
                  className="card-img-top"
                  alt="Recicla Prudente"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Recicla Prudente
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Recebe plástico, papel, vidro e metais.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Zonas;