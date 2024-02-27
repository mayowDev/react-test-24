import React from "react";
import "./style.scss";

interface ICardProps {
  width: number | string;
  height: number | string;
  className?: string;
  children: React.ReactNode | React.ReactElement;
}

const Card = ({ width, height, children, className }: ICardProps) => {
  return (
    <div className={className + " " + "card"} style={{ width, height }}>
      {children}
    </div>
  );
};

export default Card;
