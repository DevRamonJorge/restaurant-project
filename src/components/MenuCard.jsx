import React from "react";

const MenuCard = ({ title, description, price, image }) => {
  return (
    <div className="menu-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>R$ {price.toFixed(2)}</span>
    </div>
  );
};

export default MenuCard;
