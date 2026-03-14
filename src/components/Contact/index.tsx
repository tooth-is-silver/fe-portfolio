import './contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="contact__heading">Contact</h2>
        <p className="contact__subtitle">
          함께 만들어갈 프로젝트가 있으신가요?
        </p>
        <ul className="contact__list">
          <li>
            <a
              href="https://github.com/tooth-is-silver"
              className="contact__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:gelee4689@gmail.com"
              className="contact__link"
            >
              gelee4689@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
