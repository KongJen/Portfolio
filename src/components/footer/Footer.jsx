import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a
            href="https://www.facebook.com/Kongkung8901"
            className="footer__social-link"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/1kong_0/"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://x.com/Konama0"
            className="footer__social-link social-x"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </a>
        </div>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
