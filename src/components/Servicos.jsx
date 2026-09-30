import "./Servicos.css";

function Icon({ type }) {
  const icons = {
    saude: (
      <>
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
        <path d="M12 7v7" />
        <path d="M8.5 10.5h7" />
      </>
    ),

    documentos: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M10 13h5" />
        <path d="M10 17h5" />
      </>
    ),

    atendimento: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 21a6 6 0 0 1 12 0" />
        <path d="M14 16a5 5 0 0 1 7 5" />
      </>
    ),

    infraestrutura: (
      <>
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M8 20v-6h8v6" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
      </>
    ),

    familia: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="16.5" cy="9" r="2.5" />
        <path d="M3 21a6 6 0 0 1 12 0" />
        <path d="M14 16a5 5 0 0 1 7 5" />
      </>
    ),

    esporte: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M7 5.5c2 2 3.5 3 5 3s3-.8 5-2" />
        <path d="M4 13c2.5-.5 4.5-.2 6 1.2s2.3 3 2.5 5.8" />
        <path d="M15 10c1.5 1 3 2.5 4.5 5" />
      </>
    ),

    emprego: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </>
    ),

    educacao: (
      <>
        <path d="M3 9l9-5 9 5-9 5-9-5Z" />
        <path d="M7 11.5V16c2.8 2 7.2 2 10 0v-4.5" />
        <path d="M21 9v6" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

const services = [
  {
    type: "saude",
    title: "SAÚDE",
    text: "Consultas, exames, cirurgias, prevenção, oftalmologia, odontologia e muito mais.",
  },
  {
    type: "documentos",
    title: "AQUISIÇÃO DE DOCUMENTOS NA ONG",
    text: "RG, certidões, CPF, carteira de trabalho digital e muito mais.",
  },
  {
    type: "atendimento",
    title: "ATENDIMENTO NA ONG",
    text: "Psicólogos, assistentes sociais, fisioterapia, assessoria jurídica, castração de pets e Bolsa Família.",
  },
  {
    type: "infraestrutura",
    title: "INFRAESTRUTURA NOS BAIRROS",
    text: "Retirada de entulhos, recapeamento, sinalização, transporte, saneamento e iluminação pública.",
  },
  {
    type: "familia",
    title: "ASSISTÊNCIA E ORIENTAÇÃO À FAMÍLIA",
    text: "Auxílio funeral, vagas em escolas, tarifa social, sopão, Minha Casa Minha Vida e muito mais.",
  },
  {
    type: "esporte",
    title: "ESPORTE E LAZER",
    text: "Escolinhas de futsal e futvôlei, torneios, skate, zumba e atividades para crianças e adolescentes.",
  },
  {
    type: "emprego",
    title: "EMPREGOS / ESTÁGIOS",
    text: "Encaminhamento de currículos para SINE, CDL, supermercados, empresas privadas e muito mais.",
  },
  {
    type: "educacao",
    title: "EDUCAÇÃO, ARTE E CULTURA",
    text: "Música, dança, teatro, capoeira, karatê, jiu-jitsu, fanfarra e eventos culturais.",
  },
];

function Servicos() {
  return (
    <section className="servicos" id="servicos">
      <div className="servicos-container">

        <div className="servicos-heading">
          <span className="section-title-small">
            <i></i>
            NOSSOS SERVIÇOS
          </span>

          <h2>Conheça nossas áreas de atendimento</h2>

          <p>
            Oferecemos diversos serviços gratuitos para atender
            você, sua família e toda a comunidade.
          </p>
        </div>

        <div className="servicos-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.title}
            >
              <div className="service-number">
                {String(services.indexOf(service) + 1).padStart(2, "0")}
              </div>

              <div className="service-icon">
                <Icon type={service.type} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Servicos;