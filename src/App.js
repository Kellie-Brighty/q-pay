import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import MoneyTransfer from "./pages/MoneyTransfer";
import CurrencyExchange from "./pages/CurrencyExchange";
import VirtualAccounts from "./pages/VirtualAccounts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/money_transfer" element={<MoneyTransfer />} />
        <Route path="/currency_exchange" element={<CurrencyExchange />} />
        <Route path="/virtual_accounts" element={<VirtualAccounts />} />
      </Routes>
    </Router>
  );
};

export default App;
