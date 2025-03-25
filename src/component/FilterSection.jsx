import React, { useState } from "react";
import { ChevronDown, XCircle } from "lucide-react";

const FilterSection = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    rating: "",
  });
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    rating: true,
  });

  const categories = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const resetFilters = () => {
    setFilters({ category: "", minPrice: "", maxPrice: "", rating: "" });
    onFilterChange({ category: "", minPrice: "", maxPrice: "", rating: "" });
  };

  return (
    <div className="p-6 border-r border-gray-300 w-72 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full p-2 text-lg font-semibold bg-gray-100 rounded-lg hover:bg-gray-200"
          onClick={() => toggleSection("category")}
        >
          Category <ChevronDown className={`transition-transform ${openSections.category ? "rotate-180" : ""}`} />
        </button>
        {openSections.category && (
          <select
            name="category"
            className="w-full mt-2 p-2 border rounded focus:ring-2 focus:ring-blue-400"
            value={filters.category}
            onChange={handleChange}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full p-2 text-lg font-semibold bg-gray-100 rounded-lg hover:bg-gray-200"
          onClick={() => toggleSection("price")}
        >
          Price Range <ChevronDown className={`transition-transform ${openSections.price ? "rotate-180" : ""}`} />
        </button>
        {openSections.price && (
          <div className="mt-2 flex space-x-2">
            <input
              type="number"
              name="minPrice"
              placeholder="Min"
              className="w-1/2 p-2 border rounded focus:ring-2 focus:ring-blue-400"
              value={filters.minPrice}
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max"
              className="w-1/2 p-2 border rounded focus:ring-2 focus:ring-blue-400"
              value={filters.maxPrice}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full p-2 text-lg font-semibold bg-gray-100 rounded-lg hover:bg-gray-200"
          onClick={() => toggleSection("rating")}
        >
          Rating <ChevronDown className={`transition-transform ${openSections.rating ? "rotate-180" : ""}`} />
        </button>
        {openSections.rating && (
          <select
            name="rating"
            className="w-full mt-2 p-2 border rounded focus:ring-2 focus:ring-blue-400"
            value={filters.rating}
            onChange={handleChange}
          >
            <option value="">All Ratings</option>
            <option value="4">4 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="1">1 Star & Up</option>
          </select>
        )}
      </div>

      {/* Reset Button */}
      <button
        className="w-full flex items-center justify-center bg-red-500 text-white font-semibold p-2 rounded-lg hover:bg-red-600 transition"
        onClick={resetFilters}
      >
        <XCircle className="mr-2" /> Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;