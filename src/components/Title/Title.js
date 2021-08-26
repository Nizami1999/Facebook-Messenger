import React from "react";
import "./Title.scss";
import logo from "../../images/messenger-icon.png";

function Title() {
  return (
    <div className="title">
      <img src={logo} alt="logo" />
      <h2>Messenger</h2>
    </div>
  );
}

export default Title;
