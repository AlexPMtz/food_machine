import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home/Home";
import FoodMachine from "./views/FoodMachine/FoodMachine";
import Transaction from "./views/Transaction/Transaction";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodMachine" element={<FoodMachine />} />
        <Route path="/transactions/:userName" element={<Transaction />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
