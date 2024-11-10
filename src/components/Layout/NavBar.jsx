import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../assets/styles/components/layout/navbar.module.scss";
import GreenButton from "../UI/GreenButton";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.navbar}>
      <div className={style.phone_nav}>
        <a className={style.phone_logo} href="/">
          <img src="https://thexplace.ai/wp-content/uploads/2024/09/thexplace-logo.png" />
        </a>
        <div
          className={style.menu_button}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <div>
            <span className={open ? style.opened : null}></span>
            <span className={open ? style.opened : null}></span>
            <span className={open ? style.opened : null}></span>
          </div>
        </div>
        {open && (
          <div className={style.links_phone}>
            <ul className={style.links_box}>
              <li className={style.site_link}>
                <a href="/about">About</a>
              </li>
              <li className={style.site_link}>
                <a href="/for-talent">For Talent</a>
              </li>
              <li className={style.site_link}>
                <a href="/for-hiring">For Hiring</a>
              </li>
              <li className={style.site_link}>
                <a href="https://aci4jbyjxg0.typeform.com/to/BbY38G16?utm_source=xxxxx&typeform-source=thexplace.ai#name=xxxxx">
                  For Partners
                </a>
              </li>
              <li className={style.site_link}>
                <a href="https://www.blog.thexplace.ai/">Blog</a>
              </li>
              <li className={style.auth}>
                <a
                  className={style.sign_in}
                  href="https://app2.thexplace.ai/auth/login"
                >
                  Sign In
                </a>
              </li>
              <li className={style.site_link}>
                <GreenButton text="Join" />
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className={style.navbar_inner}>
        <a className={style.logo} href="/">
          <img src="https://thexplace.ai/wp-content/uploads/2024/09/thexplace-logo.png" />
        </a>

        <ul>
          <li className={style.site_link}>
            <Link to="/about">About</Link>
          </li>
          <li className={style.site_link}>
            <Link to="/for-talent">For Talent</Link>
          </li>
          <li className={style.site_link}>
            <Link to="/for-hiring">For Hiring</Link>
          </li>
          <li className={style.site_link}>
            <a href="https://aci4jbyjxg0.typeform.com/to/BbY38G16?utm_source=xxxxx&typeform-source=thexplace.ai#name=xxxxx">
              For Partners
            </a>
          </li>
          <li className={style.site_link}>
            <a href="https://www.blog.thexplace.ai/">Blog</a>
          </li>
          <li className={style.auth}>
            <a
              className={style.sign_in}
              href="https://app2.thexplace.ai/auth/login"
            >
              Sign In
            </a>
            <GreenButton text="Join" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
