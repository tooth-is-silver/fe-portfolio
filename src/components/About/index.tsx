import './about.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <h2 className="about__title">About</h2>

        <div className="about__content">
          <div className="about__bio">
            <p className="about__text">
              사용자가 자연스럽게 쓸 수 있는 인터페이스를 만드는 데 집중하는
              프론트엔드 개발자입니다.
            </p>
            <p className="about__text">
              좋은 코드는 읽기 쉽고, 좋은 UI는 설명이 필요 없다고 생각해요.
              그 두 가지를 동시에 추구합니다.
            </p>
          </div>

          <div className="about__items">
            <div className="about__item">
              <span className="about__item-icon">🎯</span>
              <div>
                <h3 className="about__item-title">집중하는 것</h3>
                <p className="about__item-desc">UI/UX 설계, 컴포넌트 구조, 성능 최적화</p>
              </div>
            </div>
            <div className="about__item">
              <span className="about__item-icon">🛠</span>
              <div>
                <h3 className="about__item-title">주로 쓰는 도구</h3>
                <p className="about__item-desc">React, TypeScript, Vite, Figma</p>
              </div>
            </div>
            <div className="about__item">
              <span className="about__item-icon">📍</span>
              <div>
                <h3 className="about__item-title">위치</h3>
                <p className="about__item-desc">서울, 대한민국</p>
              </div>
            </div>
          </div>

          <div className="about__links">
            <a
              href="https://github.com/tooth-is-silver"
              className="about__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
