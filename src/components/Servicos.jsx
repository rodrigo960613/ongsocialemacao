import "./Servicos.css";

function Icon({ type }) {
  const icons = {
    saude: (
      <svg viewBox="0 0 24 24">
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
        <path d="M12 8v6" />
        <path d="M9 11h6" />
      </svg>
    ),

    documentos: (
      <svg viewBox="0 0 24 24">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6" />
        <path d="M9 11h6" />
        <path d="M9 15h4" />
      </svg>
    ),

    atendimento: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="3" />
        <path d="M5 21a7 7 0 0 1 14 0" />
        <circle cx="18" cy="10" r="2.5" />
        <path d="M17 15a5 5 0 0 1 4 5" />
      </svg>
    ),

    infraestrutura: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
      </svg>
    ),

    familia: (
      <svg viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 21a6 6 0 0 1 12 0" />
        <path d="M14 16a5 5 0 0 1 7 5" />
      </svg>
    ),

    esporte: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v6" />
        <path d="M8 10l4 3 4-3" />
        <path d="M9 21l3-8 3 8" />
      </svg>
    ),

    emprego: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </svg>
    ),

    educacao: (
      <svg viewBox="0 0 24 24">
        <path d="M4 5h14a2 2 0 0 1 2 2v12H6a2 2 0 0 1-2-2V5Z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <path d="M18 16a2 2 0 1 0 0 4" />
      </svg>
    ),
  };

  return icons[type];
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

          <h2>Conheça todas as áreas de atendimento</h2>

          <p>
            Oferecemos diversos serviços para atender você e sua família.
            Confira abaixo:
          </p>
        </div>

        <div className="servicos-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
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
