import React from "react";

const Reservation = () => {
  return (
    <div>
      <h1>Reservas</h1>
      <form>
        <label htmlFor="date">Data:</label>
        <input type="date" id="date" name="date" required />
        
        <label htmlFor="time">Horário:</label>
        <input type="time" id="time" name="time" required />
        
        <label htmlFor="guests">Número de Pessoas:</label>
        <input type="number" id="guests" name="guests" required min="1" />
        
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

export default Reservation;