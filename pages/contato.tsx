const Contato = () => {
    return (
      <div className="contato">
        <h1>Contato</h1>
        <p>Tem dúvidas ou sugestões? Entre em contato conosco!</p>
  
        <form className="contato-form">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
  
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Seu email" required />
  
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" required></textarea>
  
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    );
  };
  
  export default Contato;
  