import React from "react";
import { ChevronDown } from "lucide-react";

const Sort = ({ onSortChange }) => {
  return (
    <div className="flex items-center space-x-3 p-3 bg-white border rounded-lg shadow-md">
      <label className="text-gray-700 font-semibold text-lg">Sort by:</label>
      <div className="relative w-48">
        <select
          className="appearance-none w-full p-2 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-400 cursor-pointer"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">Relevance</option>
          <option value="price_low_high">Price: Low to High</option>
          <option value="price_high_low">Price: High to Low</option>
          <option value="rating_high_low">Customer Rating</option>
        </select>
        <ChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default Sort;
