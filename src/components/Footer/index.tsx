import React from "react";
import wallet from "../../assets/WALLET.svg";
import explore from "../../assets/EXPLORE.svg";
import settings from "../../assets/SETTINGS.svg";
import notifications from "../../assets/NOTIFICATION.svg";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="icon-list">
        <li>
          <img src={wallet} className="logo" alt="wallet-logo" />
        </li>
        <li>
          <img src={explore} className="logo" alt="notifications-logo" />
        </li>
        <li>
          <img src={notifications} className="logo" alt="notifications-logo" />
        </li>
        <li>
          <img src={settings} className="logo" alt="settings-logo" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
