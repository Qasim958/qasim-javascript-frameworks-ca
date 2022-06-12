import React from "react";
import TopNav from "./top_nav";

const Nav = ({ active, signin }) => {
  return (
    <nav>
      <TopNav signin={signin} />
      <div className="primary-menu">
        <ul>
          <li>
            <a href="/" className={active === 'home'  ? "active" : null}>
              <i className="fa fa-home"></i> Home
            </a>
          </li>
          <li>
            <a href="/contact" className={active === 'contact'? "active" : null}>
              <i className="fa fa-phone"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
