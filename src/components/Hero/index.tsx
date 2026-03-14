import './hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <p className="hero__subtitle">Frontend Developer</p>
        <h1 className="hero__title">이가은</h1>
        <p className="hero__description">
          UI를 만들고 사용자 경험을 설계합니다.
        </p>
        <div className="hero__cta">
          <a
            href="https://github.com/tooth-is-silver"
            className="hero__btn hero__btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a href="#projects" className="hero__btn hero__btn--secondary">
            프로젝트 보기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
