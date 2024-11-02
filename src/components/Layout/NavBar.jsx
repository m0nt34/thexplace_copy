import React from "react";
import { Link } from "react-router-dom";
import style from "../../assets/styles/components/layout/navbar.module.scss";
import GreenButton from "../UI/GreenButton";
const NavBar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbar_inner}>
        <a className={style.logo} href="http://localhost:5173/">
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
            <a>For Partners</a>
          </li>
          <li className={style.site_link}>
            <a>Blog</a>
          </li>
          <li className={style.auth}>
            <Link className={style.sign_in}>Sign In</Link>
            <GreenButton text="Join" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
