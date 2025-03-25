import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContaxt";

const AddToCart = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const { addToCart } = useCartContext();

  const setIncrease = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const setDecrease = () => {
    setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
  };

  // const handleAddToCart = () => {
  //   setIsAdded(true);
  //   setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
  // };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Quantity Control */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* Add to Cart Button */}
      <NavLink
        to="/cart"
        className={`px-6 py-2 rounded-full shadow-lg transition duration-300 ${
          isAdded ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
        onClick={() => {
          console.log("Adding to cart:", product);
          addToCart(product.id, amount, product);
        }}
      >
        {isAdded ? "Added!" : "Add to Cart"}
      </NavLink>
    </div>
  );
};

export default AddToCart;
