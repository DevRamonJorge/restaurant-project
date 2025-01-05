import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>Restaurante</Link>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/menu" style={styles.link}>Menu</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.link}>Sobre</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.link}>Contato</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/reservation" style={styles.link}>Reservas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Estilos básicos
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  logoText: {
    textDecoration: "none",
    color: "#fff",
  },
  nav: {
    display: "flex",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
  },
  linkHover: {
    color: "#ff9800",
  },
};

export default Nav;