import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div>
          <Link to="/" className="text-xl font-bold text-red-500">
            Logo
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-sm font-medium text-white hover:text-red-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-sm font-medium text-white hover:text-red-600"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-sm font-medium text-white hover:text-red-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-sm font-medium text-white hover:text-red-600"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <Link to="/cart" className="text-white hover:text-red-600">
            <FiShoppingCart size={24} />
          </Link>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span>Account</span>
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 dark:bg-gray-800">
                <ul>
                  {user ? (
                    <>
                      <li>
                        <Link
                          to="/my-orders"
                          className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            logout();
                            navigate("/login");
                            setIsUserMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-900 dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Open Menu</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ✅ Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-50 dark:bg-gray-700 border border-gray-200 rounded-lg py-3 px-4 mt-2">
          <ul className="text-gray-900 dark:text-white text-sm font-medium space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-red-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-red-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-red-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    to="/my-orders"
                    className="hover:text-red-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      navigate("/login");
                      setIsMobileMenuOpen(false);
                    }}
                    className="hover:text-red-600"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="hover:text-red-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
