import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import MainHero from "./pages/MainHero";
import About from "./pages/About";
import NavAbout from "./pages/NavAbout";
import Card from "./pages/Card";

import Services from "./pages/Services";
import Footer from "./pages/Footer";
import AdminLogin from "./authantication/AdminLogin";
import AddCard from "./AddCardsdetails/AddCard";
import MainPage from "./pages/MainPage";
import AdminDashboard from "./AddCardsdetails/AdminDashboard";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/card" element={<AddCard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<NavAbout />} />
          {/* <Route path="/account" element={<Account />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
