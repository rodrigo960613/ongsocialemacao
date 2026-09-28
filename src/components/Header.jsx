import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        {/* LOGO */}
        <a href="#inicio" className="header-logo">
          <img
            src={logo}
            alt="ONG Social em Ação"
          />
        </a>

        {/* MENU */}
        <nav className="header-menu">

          <a href="#inicio">
            Inicio
          </a>

          <a href="#sobre">
            Sobre Nós
          </a>

          <a href="#servicos">
            Serviços
          </a>

          <a href="#doacao">
            Doação
          </a>

          <a href="#footer">
            Onde Estamos e Contato
          </a>

        </nav>

        {/* BOTÃO */}
        <a
          href="https://wa.me/5585996302673?text=Gostaria%20de%20fazer%20uma%20doa%C3%A7%C3%A3o%20!"
          target="_blank"
          rel="noopener noreferrer"
          className="header-button"
        >
          <svg viewBox="0 0 24 24">
            <path d="M20.8 8.8c0 5.5-8.8 10.5-8.8 10.5S3.2 14.3 3.2 8.8A5 5 0 0 1 12 5.6a5 5 0 0 1 8.8 3.2Z" />
          </svg>

          Doe Agora
        </a>

      </div>

    </header>
  );
}

export default Header;