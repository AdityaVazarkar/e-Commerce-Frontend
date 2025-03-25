import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socialIcons = [
    { icon: faFacebook, link: "#" },
    { icon: faTwitter, link: "#" },
    { icon: faInstagram, link: "#" },
    { icon: faGithub, link: "#" },
    { icon: faYoutube, link: "#" },
  ];
  return (
    <footer>
      <div className="bg-gray-800 py-4 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Logo and Description */}
            <div className="w-full xl:w-1/5 my-4">
              <a href="/" className="block w-56 mb-10">
                {/* <img src="/logo.png" alt="Tailwindow Logo" className="w-full" /> */}
                Logo
              </a>
              <p className="text-justify">
                Discover amazing content and explore our services.
              </p>
            </div>

            {/* Company Links */}
            <div className="w-full sm:w-auto my-4">
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                Company
              </h2>
              <ul className="leading-8">
                <li>
                  <a href="/" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-blue-400">
                    Product
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="w-full sm:w-auto xl:w-1/5 my-4">
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                Connect With Us
              </h2>
              <div className="flex space-x-2">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="flex items-center justify-center h-8 w-8 border bg-white border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400"
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-indigo-700 py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full text-center sm:w-auto sm:text-left">
              Copyright © 2020 - {new Date().getFullYear()}
            </div>
            <div className="w-full text-center sm:w-auto sm:text-left">
              Made with ❤️ by Aditya.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
