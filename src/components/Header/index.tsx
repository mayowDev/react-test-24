import { useState } from "react";
import ArrorLeft from "../../assets/arrow-left.svg";
import "./styles.scss";
import Menu from "../dropdownMenu";
const Header = () => {
  const [isOpen, toggleMenu] = useState(false);

  return (
    <header className="header">
      <img src={ArrorLeft} alt="arrow-left-back" />
      <h1>Bitcoin Wallet</h1>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
