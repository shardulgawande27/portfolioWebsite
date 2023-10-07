import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Shardul</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About Me{" "}
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              qualification
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-messenger"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Shardul_Gawande. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};
