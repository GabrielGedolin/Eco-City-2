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
        className="d-flex align-items-center justify-content-center"
        style={{
          height: "100vh", // 100% da altura da viewport
          backgroundColor: "#28a745", // Cor de fundo da hero section
          color: "white", // Cor do texto
        }}
      >
        <div className="container text-center">
          {/* Defina o estilo globalmente */}
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
              border-right: 0.15em solid rgb(21, 255, 0); /* Cursor */
              animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
              font-family: monospace; /* Fonte monoespaçada para melhor visualização */
            }
            .botao {
              margin:10px;
              background-color: green; /* Cor de fundo */
              color: white; /* Cor do texto */
              text-decoration: none; /* Remove sublinhado */
              border-radius: 5px; /* Bordas arredondadas */
              font-weight: bold; /* Texto em negrito */
              transition: background-color 0.3s ease; /* Transição suave */
              padding: 0.8rem 1.5rem; /* Espaçamento interno */
              display: inline-block; /* Para garantir que o botão se comporte como um bloco */
              border: none; /* Remove borda padrão */
              cursor: pointer; /* Cursor de ponteiro */
            }

            .botao:hover {
              background-color: darkgreen; /* Cor de fundo ao passar o mouse */
            }
            .card-hover-effect {
              transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transição suave */
            }

            .card-hover-effect:hover {
              transform: translateY(-10px); /* Move o elemento 10px para cima */
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra */
            }
          `}</style>

          <h1>
            <span style={{
              backgroundImage: "linear-gradient(to right, white,rgb(21, 255, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Transforme sua cidade
            </span>
            <br />
            com o <span style={{
              backgroundImage: "linear-gradient(to left, white,rgb(21, 255, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Eco City</span>
          </h1>

          {/* Container para centralizar o texto e o cursor */}
          <div className="typing-container">
            <p
              className="typing-text"
              style={{
                fontSize: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              Discarte os resíduos corretamente, promova a sustentabilidade.
            </p>
          </div>
              <br />
          <a href="/pontos" className='botao'>
            Explorar Pontos de Coleta
          </a>

          <a href="/zonas" className='botao'>
            Explorar Zonas verdes
          </a> 
          
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#000000", // Cor de fundo de fallback
          color: "white", // Cor do texto
          backgroundImage: "url('/path/to/your/pattern.png')", // Caminho para a imagem de fundo
          backgroundRepeat: "repeat", // Repetir a imagem de fundo
          backgroundSize: "auto", // Tamanho automático da imagem
          height:"100vh"
        }}
      >
        <h1
          style={{
            fontFamily: "monospace",
          }}
          className="text-center mb-5" // Adicionado margin-bottom para espaçamento
        >
          O que oferecemos?
        </h1>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"> {/* Ajuste do grid para responsividade */}
            {/* Card 1 - Adoção de Áreas Verdes */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center"> {/* Centralizado */}
                  <h3 className="card-title">Adote uma Área Verde</h3>
                  <p className="card-text">
                    Empresas, adotem uma área verde e contribua para a preservação do meio ambiente. Ganhe visibilidade e mostre seu compromisso com a sustentabilidade.
                  </p>
                  <a href="/adocao" className="btn btn-success"> {/* Botão alinhado ao final */}
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 - Pontos de Coleta de Reciclagem */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center"> {/* Centralizado */}
                  <h3 className="card-title">Pontos de Coleta</h3>
                  <p className="card-text">
                    Encontre os pontos de coleta de reciclagem mais próximos de você. Descarte seus resíduos corretamente e ajude a construir uma cidade mais sustentável.
                  </p>
                  <a href="/pontos-de-coleta" className="btn btn-success"> {/* Botão alinhado ao final */}
                    Ver Pontos
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 - Benefícios da Adoção */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center"> {/* Centralizado */}
                  <h3 className="card-title">Benefícios da Adoção</h3>
                  <p className="card-text">
                    Ao adotar uma área verde, sua empresa recebe selos de sustentabilidade, visibilidade na plataforma e reconhecimento público.
                  </p>
                  <a href="/beneficios" className="btn btn-success"> {/* Botão alinhado ao final */}
                    Conheça os Benefícios
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 - Eventos de Sustentabilidade */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center"> {/* Centralizado */}
                  <h3 className="card-title">Eventos de Sustentabilidade</h3>
                  <p className="card-text">
                    Participe de eventos de plantio, limpeza e conscientização ambiental. Junte-se à comunidade e faça a diferença.
                  </p>
                  <a href="/eventos" className="btn btn-success"> {/* Botão alinhado ao final */}
                    Confira os Eventos
                  </a>
                </div>
              </div>
            </div>

            {/* Card 5 - Impacto Gerado */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center"> {/* Centralizado */}
                  <h3 className="card-title">Impacto Gerado</h3>
                  <p className="card-text">
                    Veja o impacto positivo que sua empresa ou comunidade está gerando ao adotar áreas verdes e utilizar pontos de coleta.
                  </p>
                  <a href="/impacto" className="btn btn-success"> {/* Botão alinhado ao final */}
                    Veja o Impacto
                  </a>
                </div>
              </div>
            </div>

            {/* Card 6 - Cadastre-se */}
            <div className="col">
              <div className="card border-0 shadow-sm h-100 bg-success card-hover-effect" style={{ background: "linear-gradient(135deg, #1e7e34, #28a745)" }}>
                <div className="card-body text-white d-flex flex-column align-items-center text-center"> {/* Centralizado */}
                  <h3 className="card-title">Cadastre-se</h3>
                  <p className="card-text">
                    Empresas e cidadãos, cadastre-se na plataforma e comece a fazer parte dessa mudança.
                  </p>
                  <a href="/cadastro" className="btn btn-success"> {/* Botão alinhado ao final */}
                    Cadastre-se Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;