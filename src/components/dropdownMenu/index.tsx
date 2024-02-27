import { useState } from "react";

const menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ul className="mobile-menu ">
        <li>Edit</li>
        <li>Info</li>
        <li>Share</li>
        <li>Remove</li>
      </ul>
    </div>
  );
};

export default menu;
