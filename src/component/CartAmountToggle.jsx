import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={setDecrease}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
      >
        <AiOutlineMinus className="w-5 h-5 text-gray-700" />
      </button>
      <span className="text-lg font-semibold">{amount}</span>
      <button
        onClick={setIncrease}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
      >
        <AiOutlinePlus className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
};

export default CartAmountToggle;
