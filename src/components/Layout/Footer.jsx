import React from "react";
import style from "../../assets/styles/components/layout/footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={style.main_cont}>
      <div className={style.inside_cont}>
        <div className={style.footer}>
          <header>
            <div className={style.logo}>
              <img
                src="https://thexplace.ai/wp-content/uploads/2024/09/thexplace-footer-logo.png"
                alt=""
              />
            </div>
            <span>© TheXPlace 2024</span>
          </header>
          <div className={style.bottom_cont}>
            <div>
              <Link to="/for-talent">For Talent</Link>
              <Link to="/for-hiring">For Hiring</Link>
              <a href="https://aci4jbyjxg0.typeform.com/to/DeEu1HBd">
                For Schools
              </a>
            </div>
            <div>
              <Link to="/about">About</Link>
              <a href="https://www.blog.thexplace.ai/">Blog</a>
              <a href="https://thexplace.ai/faq/">FAQ</a>
            </div>
            <div className={style.last_box}>
              <div className={style.left_cont}>
                <a href="https://thexplace.ai/terms-of-service/">
                  Terms of Service
                </a>
                <a href="#">Contact Us</a>
              </div>
              <div className={style.social_media_cont}>
                <a href="https://x.com/TheXPlace">
                  <img
                    src="https://thexplace.ai/wp-content/uploads/2024/09/x-social.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/thexplace"
                >
                  <img
                    src="https://thexplace.ai/wp-content/uploads/2024/09/linkedin.png"
                    alt=""
                  />
                </a>
                <a href="https://www.facebook.com/TheXPlace.Inc">
                  <img
                    src="https://thexplace.ai/wp-content/uploads/2024/09/facebook.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
