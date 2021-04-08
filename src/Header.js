// rfc - snippet
import Logo from "./Assets/logo-tinder.png";
import React from "react";
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle"; // Usage: <AccountCircleIcon/>
import IconButton from "@material-ui/core/IconButton"; // Gives hovering effect to icons
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <AccountCircleIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img className="header__logo" src={Logo} alt="Tinder"></img>

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
