import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Banner from "../components/Banner";

const Home = () => {
  const navigate = useNavigate();

  // Função de navegação
  const handleClick = () => {
    navigate('/menu'); // Redireciona para a página "Menu"
  };

  return (
    <>
      <Nav />
      <div>
        <h1>Bem-vindo ao Restaurante Gourmet</h1>
        <p>Desfrute da melhor experiência gastronômica com nossos pratos exclusivos.</p>
        <button onClick={handleClick}>Veja o Menu</button>
      </div>
      <Banner/>
    </>
  );
};

export default Home;
