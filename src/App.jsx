import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import About from './pages/About';
import Contact from './pages/Contact.Jsx';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation.Jsx';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  </Router>
  )
}

export default App
