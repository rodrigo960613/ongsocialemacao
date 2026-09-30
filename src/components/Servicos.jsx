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
    title: "ÁREA DE SAÚDE",
    items: [
      {
        title: "Marcação de consultas:",
        text: "Cirurgias, parto, ligação, prevenção ginecológica, eletrocardiograma (ECG), endoscopia, ultrassonografia e raios-X.",
      },
      {
        title: "Exames:",
        text: "Hemograma completo, entre outros.",
      },
      {
        title: "Oftalmologista:",
        text: "Avaliação e cirurgias de catarata.",
      },
      {
        title: "Odontologia:",
        text: "Clínica geral.",
      },
    ],
  },

  {
    type: "documentos",
    title: "AQUISIÇÃO DE DOCUMENTOS NA ONG",
    items: [
      {
        text: "Agendamentos da 1ª e 2ª vias da carteira de identidade.",
      },
      {
        text: "1ª e 2ª vias da certidão de nascimento.",
      },
      {
        text: "1ª e 2ª vias da certidão de casamento.",
      },
      {
        text: "Aquisição do papel para obter o casamento gratuito.",
      },
      {
        text: "1ª e 2ª vias do CPF.",
      },
      {
        text: "Carteira de trabalho digital.",
      },
    ],
  },

  {
    type: "atendimento",
    title: "ATENDIMENTO NA ONG",
    items: [
      {
        text: "Psicólogos e psicanalistas.",
      },
      {
        text: "Atendimento psicológico para crianças e adolescentes autistas.",
      },
      {
        text: "Assistentes sociais.",
      },
      {
        text: "Fisioterapeuta.",
      },
      {
        text: "Assessoria jurídica.",
      },
      {
        text: "Castração, consultas, exames e cirurgias para pets (cães e gatos).",
      },
      {
        title: "Bolsa Família:",
        text: "Desbloqueio, cadastramento e recadastramento.",
      },
    ],
  },

  {
    type: "infraestrutura",
    title: "INFRAESTRUTURA NOS BAIRROS",
    items: [
      {
        text: "Retirada de entulhos das ruas e recapeamento asfáltico.",
      },
      {
        text: "Sinalização de ruas e redutores de velocidade.",
      },
      {
        text: "Pedidos de remoção de paradas de ônibus e solicitação de abrigos para as paradas de ônibus.",
      },
      {
        text: "Ligação da rede SANEAR (Cagece).",
      },
      {
        text: "Remoção de postes de iluminação pública e substituição de lâmpadas queimadas (Enel).",
      },
    ],
  },

  {
    type: "familia",
    title: "ASSISTÊNCIA E ORIENTAÇÃO À FAMÍLIA",
    items: [
      {
        title: "Projeto Mesa Farta:",
        text: "Doação de frutas, legumes e verduras.",
      },
      {
        title: "Auxílio Funeral:",
        text: "Urna e enterro para pessoa carente.",
      },
      {
        text: "Vagas em escolas.",
      },
      {
        text: "Carteira de gratuidade para passe livre de idosos (Sindiônibus).",
      },
      {
        text: "Tarifa Social de Energia Elétrica.",
      },
      {
        title: "Projeto Sopão:",
        text: "Para as comunidades carentes.",
      },
      {
        text: "Encaminhamento para internação de dependentes químicos.",
      },
      {
        text: "Encaminhamento para palestras de Alcoólicos Anônimos (A.A.).",
      },
      {
        text: "Encaminhamento para o cadastro do Projeto Minha Casa Minha Vida (HABITAFOR).",
      },
      {
        text: "Encaminhamento ao Conselho Tutelar.",
      },
      {
        text: "Encaminhamento para teste de paternidade (DNA/LACEN).",
      },
      {
        title: "Microempreendedor Individual:",
        text: "Cadastro pelo SEBRAE.",
      },
    ],
  },

  {
    type: "esporte",
    title: "ESPORTE E LAZER",
    items: [
      {
        text: "Inscrição de crianças e adolescentes para escolinhas de FUTSAL e FUTVÔLEI, visando tirá-los da ociosidade e da violência, além da prevenção ao uso de drogas.",
      },
      {
        text: "Inscrição para realização de Torneios, Copas e Campeonatos de FUTSAL, FUTVÔLEI, SKATE e ZUMBA, promovendo o esporte e o lazer em nossas comunidades.",
      },
    ],
  },

  {
    type: "emprego",
    title: "EMPREGOS / ESTÁGIOS",
    items: [
      {
        title: "Encaminhamento de currículos para:",
        text: "SINE IDT, CDL, supermercados e empresas privadas.",
      },
      {
        text: "1º emprego.",
      },
      {
        text: "Instituições conveniadas com a ONG Social em Ação.",
      },
    ],
  },

  {
    type: "educacao",
    title: "EDUCAÇÃO, ARTE E CULTURA",
    items: [
      {
        text: "Reinserção na comunidade por meio de oficinas de arte e cursos profissionalizantes, incluindo: Música, Dança, Teatro, Folclore, Banda de Fanfarra, Capoeira, Karatê e Jiu-jitsu.",
      },
      {
        text: "Promoção de eventos culturais: Festejos Juninos, Paixão de Cristo e 7 de Setembro (Desfile Cívico).",
      },
    ],
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
            Confira todos os serviços e ações oferecidos pela ONG Social em
            Ação.
          </p>
        </div>

        <div className="servicos-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="service-icon">
                <Icon type={service.type} />
              </div>

              <h3>{service.title}</h3>

              <ul className="service-list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="service-bullet">•</span>

                    <p>
                      {item.title && `${item.title} `}
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicos;
