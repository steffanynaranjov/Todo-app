import React from "react";
import logo from "../img/icon-add-list.png";
import "../styles/Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__">
          <img className="header__img" src={logo} alt="Platzi Video" />
        </div>
        <div className="header__menu">
          <div className="header__menu--profile">
            <h1>Todo task</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export { Header };
