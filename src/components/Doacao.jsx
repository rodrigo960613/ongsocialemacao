import "./Doacao.css";

function Doacao() {
  return (
    <section className="doacao" id="doacao">
      <div className="doacao-container">

        <div className="doacao-heart">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.8 8.8c0 5.5-8.8 10.5-8.8 10.5S3.2 14.3 3.2 8.8A5 5 0 0 1 12 5.6a5 5 0 0 1 8.8 3.2Z" />
          </svg>
        </div>

        <div className="doacao-text">
          <span>FAÇA PARTE DESSA TRANSFORMAÇÃO</span>

          <h2>
            Sua ajuda faz a diferença
          </h2>

          <p>
            Sua contribuição ajuda a ONG Social em Ação a continuar
            oferecendo serviços gratuitos e fortalecendo nossa comunidade.
          </p>
        </div>

        <a
          href="https://wa.me/5585996302673?text=Gostaria%20de%20fazer%20uma%20doa%C3%A7%C3%A3o%20!"
          target="_blank"
          rel="noopener noreferrer"
          className="doacao-button"
        >
          Quero doar
          <span>♥</span>
        </a>

        <div className="doacao-slogan">
          Juntos
          <br />
          podemos
          <br />
          mais!
        </div>

      </div>
    </section>
  );
}

export default Doacao;