import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Corrigindo a sintaxe da função
  const handleClick = () => {
    navigate('/menu'); // Redireciona para a página "Menu"
  };

  return (
    <div>
      <h1>Bem-vindo ao Restaurante Gourmet</h1>
      <p>Desfrute da melhor experiência gastronômica com nossos pratos exclusivos.</p>
      <button onClick={handleClick}>Veja o Menu</button>
    </div>
  );
};

export default Home;
