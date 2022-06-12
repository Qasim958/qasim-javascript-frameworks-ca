import React from "react";

const Header = () => {
  return (
    <header className="header-container">
      <div className="banner">
        <div className="content">
          <h1>SFS</h1>
          <h2>SHOES FOR MEN</h2>
          <hr />
          <div>
            <a href="contact.html" id="contactBtn">
              CONTACT US
            </a>
          </div>
        </div>
        <div className="ads"></div>
      </div>
    </header>
  );
};

export default Header;
