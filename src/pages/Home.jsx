import React from "react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import Services from "../component/Services";
import Product from "../component/Product";

const Home = () => {
  const data = {
    name: "Our Store",
  };

  return (
    <div>
      <HeroSection myData={data} />
      <Product />
      <Services />
    </div>
  );
};

export default Home;
