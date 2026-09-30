import "./Sobre.css";
import fachada from "../assets/fachada.jpeg";

function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">

        <div className="sobre-image">
          <img
            src={fachada}
            alt="Fachada da ONG Social em Ação"
          />

          <div className="sobre-image-badge">
            <span>ONG</span>
            <strong>Social em Ação</strong>
          </div>
        </div>

        <div className="sobre-content">

          <span className="sobre-label">
            <i></i>
            SOBRE A ONG
          </span>

          <h2>Social em Ação</h2>

          <p>
            Somos uma organização sem fins lucrativos que atua
            com compromisso e responsabilidade social, levando
            serviços e apoio às famílias e comunidades mais
            necessitadas.
          </p>

          <div className="sobre-destaques">

            <div className="sobre-item">
              <div className="sobre-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="9" cy="8" r="3" />
                  <circle cx="17" cy="9" r="2.5" />
                  <path d="M3 21a6 6 0 0 1 12 0" />
                  <path d="M14 16a5 5 0 0 1 7 5" />
                </svg>
              </div>

              <span>
                Pessoas e<br />
                famílias
              </span>
            </div>

            <div className="sobre-item">
              <div className="sobre-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20.8 8.8c0 5.5-8.8 10.5-8.8 10.5S3.2 14.3 3.2 8.8A5 5 0 0 1 12 5.6a5 5 0 0 1 8.8 3.2Z" />
                </svg>
              </div>

              <span>
                Trabalho<br />
                social
              </span>
            </div>

            <div className="sobre-item">
              <div className="sobre-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 12l3-3 4 4 5-6 6 4" />
                  <path d="M3 12v5" />
                  <path d="M21 11v5" />
                </svg>
              </div>

              <span>
                Um futuro<br />
                melhor
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Sobre;