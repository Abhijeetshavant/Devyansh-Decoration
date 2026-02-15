import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MainHero from "./MainHero";
import About from "./About";
import Footer from "./Footer";
import Card from "./Card";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MainHero />
      <About />
      <Card />
      <Footer />
    </>
  );
};

export default MainPage;
