import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <div className="flex flex-col md:flex-row items-center w-11/12 mx-auto h-auto md:h-[400px] mt-12 gap-6">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-100 text-center border-4 border-gradient p-6">
        <h1 className="text-xl md:text-2xl font-semibold">Welcome to</h1>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">{name}</h1>
        <p className="mt-4 text-lg">Discover amazing content and explore our services.</p>
        <Link
          to="/products"
          className="mt-6 px-6 py-3 text-white bg-red-400 rounded-md text-lg transition duration-300 hover:bg-red-500"
        >
          Shop Now
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-[250px] md:h-[400px] flex items-center justify-center border-4 border-gradient overflow-hidden">
        <img
          src="https://f.hellowork.com/blogdumoderateur/2023/05/ECommerce-Fevad-2023-.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      <style>
        {`
          .border-gradient {
            border-image: linear-gradient(0deg, #ff6b6b, #1e90ff) 1;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;