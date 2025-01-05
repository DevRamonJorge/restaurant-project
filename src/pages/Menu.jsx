import React from "react";
import { menuData } from "../utils/menuData"; // Importa dados do menu
import MenuCard from "../components/MenuCard"; // Componente para renderizar cada prato
import "../styles/Menu.css";

const Menu = () => {
  
  return (
    <div className="page-container">
      <h1>Menu do Restaurante</h1>
      <div className="meu-container">
        {menuData.map((item) => 
        <MenuCard 
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
        )}
      </div>
    </div>
  );
};

export default Menu;