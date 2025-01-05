import React from "react";
import "../styles/MenuCard.css";

function MenuCard({ title, description, price, image }) {
  return (
    <div className="menu-card">
      <img src={image} alt={title} className="menu-card-image" />
      <h2 className="menu-card-title">{title}</h2>
      <p className="menu-card-description">{description}</p>
      <p className="menu-card-price">R${price.toFixed(2)}</p>
    </div>
  );
}

export default MenuCard;
