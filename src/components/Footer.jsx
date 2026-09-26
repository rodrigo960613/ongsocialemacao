import "./Footer.css";

function Footer() {
  const whatsapp =
    "https://wa.me/5585996302673?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20a%20ONG%20Social%20em%20A%C3%A7%C3%A3o.";

  const instagram = "https://www.instagram.com/socialemacaooficial/";

  const facebook = "https://www.facebook.com/ongsocialemacao/?locale=pt_BR";

  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* CONTATOS */}
        <div className="footer-contatos">
          <h2>Contatos</h2>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            <svg viewBox="0 0 24 24">
              <path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.5-4.2A8 8 0 1 1 20 11.5Z" />
              <path d="M8.5 8.5c.2 2.1 1.4 4.2 3.6 5.5 1.1.7 2.2.9 2.8.6.4-.2.8-.8.9-1.2.1-.3 0-.5-.3-.6l-1.7-.8c-.2-.1-.4-.1-.6.1l-.6.7c-.1.1-.2.1-.4.1-.9-.3-1.7-.8-2.4-1.5-.7-.7-1.2-1.4-1.4-2.1 0-.1 0-.2.1-.3l.5-.6c.1-.2.1-.4 0-.6L8.2 7c-.1-.3-.3-.3-.6-.3-.4.1-.8.3-1 .7-.2.3-.3.7-.1 1.1Z" />
            </svg>
            FALAR NO WHATSAPP
          </a>

          <div className="footer-social">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
            >
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>

              <span>Instagram</span>
            </a>

            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" />
              </svg>

              <span>Facebook</span>
            </a>
          </div>

          <div className="footer-horario">
            <div className="footer-horario-title">
              <h3>Horário de funcionamento</h3>
            </div>

            <p>
              <strong>Segunda a Sexta</strong>
              <br />
              08:00 às 12:00
            </p>
          </div>
        </div>

        {/* MAPA */}
        <div className="footer-localizacao">
          <h2>Onde Estamos</h2>

          <div className="footer-endereco">
            <svg viewBox="0 0 24 24">
              <path d="M21 10c0 5-9 11-9 11S3 15 3 10a9 9 0 1 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <strong>
              R. Luís de Castro, 17 - João XXIII, Fortaleza - CE, 60520-035
            </strong>
          </div>

          <div className="footer-map">
            <iframe
              title="Localização da ONG Social em Ação"
              src="https://www.google.com/maps?q=Rua+Lu%C3%ADs+de+Castro,+17,+Jo%C3%A3o+XXIII,+Fortaleza,+CE,+60520-035&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Lu%C3%ADs+de+Castro%2C+17%2C+Jo%C3%A3o+XXIII%2C+Fortaleza%2C+CE%2C+60520-035"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-button"
            >
              Abrir no Maps ↗
            </a>
          </div>
        </div>
      </div>

      {/* LINHA E COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ONG Social em Ação. Todos os direitos
          reservados.
        </p>
      </div>

      {/* BOTÃO VOLTAR AO TOPO */}
      <button
        type="button"
        className="footer-top-button"
        onClick={voltarAoTopo}
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;
