import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './views/Home/Home'
import FoodMachine from "./views/FoodMachine/FoodMachine";
import Ticket from "./views/Ticket/Ticket";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/foodMachine" element={ <FoodMachine /> } />
        <Route path="/ticket" element={ <Ticket /> } />

        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;