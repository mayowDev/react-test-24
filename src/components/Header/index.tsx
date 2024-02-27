import React from "react";
import ArrorLeft from "../../assets/arrow-left.svg";
import DropDownIcon from "../../assets/menu-icon.svg";
import "./styles.scss";
const Header = () => {
  return (
    <header className="header">
      <img src={ArrorLeft} alt="arrow-left-back" />
      <h1>Bitcoin Wallet</h1>
      <img src={DropDownIcon} alt="menu-dropdown" />
    </header>
  );
};

export default Header;
