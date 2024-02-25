import React from "react";

interface ICardProps {
  width: number;
  height: number;
  children: React.ReactNode | React.ReactElement;
}

const Card = ({ width, height, children }: ICardProps) => {
  return (
    <div className="card" style={{ width, height }}>
      {children}
    </div>
  );
};

export default Card;
