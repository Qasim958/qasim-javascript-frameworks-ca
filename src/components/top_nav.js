import React from "react";

const TopNav = ({ signin }) => {
  return (
    <div className="top-menu">
      <div className="top-contact">+323-468-889 | sfs@gmail.com</div>
      <div className="top-contact">
        <a href="/login">
          <i className="fa fa-sign-in"></i>
          {signin ? "Signout" : "Signin"}
        </a>
      </div>
    </div>
  );
};

export default TopNav;
