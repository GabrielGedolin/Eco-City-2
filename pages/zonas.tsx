import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import withAuth from '../components/withAuth';

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
        <title>Zonas Verdes - Eco City</title>
      </Head>

      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center py-5"
        style={{
          backgroundColor: '#000',
          color: '#28a745',
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', animation: 'fadeIn 1s ease-in-out' }}>
            Zonas Verdes para Adoção
          </h1>
          <div className="typing-container">
            <p
              className="typing-text"
              style={{
                fontSize: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              Explore as zonas verdes disponíveis para adoção em Presidente Prudente.
            </p>
          </div>
        </div>
      </section>

      {/* Zonas Section */}
      <section className="py-5" style={{ backgroundColor: '#000' }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {/* Card 1 - Rotatória do Shopping */}
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
                  src="/img/rotatoria.jpg"
                  className="card-img-top"
                  alt="Rotatória do Shopping"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Rotatória do Shopping
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Zona com grande visibilidade, ideal para empresas.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 - Parque do Povo */}
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
                  src="/img/parque-povo.jpg"
                  className="card-img-top"
                  alt="Parque do Povo"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Parque do Povo
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Um dos principais parques da cidade, ideal para adoção.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 - Parque Ecológico */}
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
                  src="/img/parque-ecologico.png"
                  className="card-img-top"
                  alt="Parque Ecológico"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Parque Ecológico
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Área verde com trilhas e espaços para lazer.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4 - Praça da Juventude */}
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
                  src="/img/praca-juventude.jpeg"
                  className="card-img-top"
                  alt="Praça da Juventude"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Praça da Juventude
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Espaço com quadras esportivas e áreas verdes.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 5 - Praça do Centenário */}
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
                  src="/img/praca-centenario.jpeg"
                  className="card-img-top"
                  alt="Praça do Centenário"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Praça do Centenário
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Localizada no centro, com grande visibilidade.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 6 - Praça dos Expedicionários */}
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
                  src="/img/praca-expedicionarios.jpg"
                  className="card-img-top"
                  alt="Praça dos Expedicionários"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Praça dos Expedicionários
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Localizada no centro, com grande fluxo de pessoas.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 7 - Praça 9 de Julho */}
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
                  src="/img/praca-9-julho.jpeg"
                  className="card-img-top"
                  alt="Praça 9 de Julho"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center" style={{ padding: '20px' }}>
                  <h3 className="card-title" style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '15px' }}>
                    Praça 9 de Julho
                  </h3>
                  <p className="card-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Localizada no centro, com grande visibilidade.
                  </p>
                  <Link href="/mapa" className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                    Visualizar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          border-right: 0.15em solid rgb(21, 255, 0); /* Cursor */
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
          font-family: monospace; /* Fonte monoespaçada para melhor visualização */
        }
      `}</style>
    </>
  );
};

export default withAuth(Zonas);