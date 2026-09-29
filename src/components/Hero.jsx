import "./Hero.css";
import heroImage from "../assets/hero-referencia.jpg";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-background">
        <img
          src={heroImage}
          alt="Ação social da ONG Social em Ação"
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-label">ONG SOCIAL EM AÇÃO</span>

        <h1>
          Juntos por uma
          <br />
          comunidade <span>mais forte!</span>
        </h1>

        <p>
          A ONG Social em Ação trabalha todos os dias para oferecer
          serviços gratuitos e promover dignidade, inclusão e
          esperança para quem mais precisa.
        </p>

        <a href="#servicos" className="hero-button">
          Conheça nossos serviços
          <span>→</span>
        </a>
      </div>

      <div className="hero-curve"></div>
    </section>
  );
}

export default Hero;