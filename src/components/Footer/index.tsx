import wallet from "../../assets/walleticon.svg";
import explore from "../../assets/exploreicon.svg";
import settings from "../../assets/settingsicon.svg";
import notifications from "../../assets/notificationicon.svg";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="icon-list">
        <li>
          <img src={wallet} className="logo" alt="wallet-logo" />
        </li>
        <li>
          <img src={explore} className="logo" alt="explore-logo" />
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
