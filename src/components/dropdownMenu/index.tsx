import DropDownIcon from "../../assets/menuicon.svg";
import EditIcon from "../../assets/editicon.svg";
import InfoIcon from "../../assets/infoicon.svg";
import ShareIcon from "../../assets/share.svg";
import RemoveIcon from "../../assets/removeicon.svg";

import "./style.scss";
import { useEffect, useRef } from "react";

const Menu = ({ isOpen, toggleMenu }: any) => {
  const ref: any = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (isOpen && !ref.current?.contains(event.target)) {
        toggleMenu(!isOpen);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, isOpen]);

  return (
    <div className="container" ref={ref}>
      <img
        className="mobile-menu-button"
        onClick={() => toggleMenu(!isOpen)}
        src={DropDownIcon}
        alt="menu-button"
      />
      <ul id="mobile-menu" className={isOpen ? "mobile-menu" : "menu-hidden"}>
        <li>
          Edit <img alt="edit-icon" src={EditIcon} />
        </li>
        <li>
          Info <img alt="info-icon" src={InfoIcon} />
        </li>
        <li>
          Share <img alt="share-icon" src={ShareIcon} />
        </li>
        <li>
          Remove <img alt="remove-icon" src={RemoveIcon} />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
