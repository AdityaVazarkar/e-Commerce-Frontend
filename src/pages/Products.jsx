import React, { useState, useEffect } from "react";
import FilterSection from "../component/FilterSection";
import Sort from "../component/Sort";
import ProductList from "../component/ProductList";
import { useProductContext } from "../context/ProductContext";

const Products = () => {
  const { isLoading, isError, products } = useProductContext();

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    rating: "",
  });
  const [sortOption, setSortOption] = useState("");

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  useEffect(() => {
    let updatedProducts = [...products];

    if (filters.category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filters.category
      );
    }
    if (filters.minPrice) {
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= parseFloat(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      updatedProducts = updatedProducts.filter(
        (product) => product.price <= parseFloat(filters.maxPrice)
      );
    }
    if (filters.rating) {
      updatedProducts = updatedProducts.filter(
        (product) => product.rating.rate >= parseFloat(filters.rating)
      );
    }

    if (sortOption === "price_low_high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price_high_low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating_high_low") {
      updatedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFilteredProducts(updatedProducts);
  }, [products, filters, sortOption]);

  if (isLoading) {
    return (
      <h2 className="text-center text-blue-500 text-xl mt-10">
        Loading products...
      </h2>
    );
  }

  if (isError) {
    return (
      <h2 className="text-center text-red-500 text-xl mt-10">
        Failed to load products!
      </h2>
    );
  }

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-4">
      <aside className="w-full md:w-1/4 p-4 border-r bg-white shadow-md rounded-lg">
        <FilterSection onFilterChange={handleFilterChange} />
      </aside>
      <main className="w-full md:w-3/4 p-4">
        <div className="flex justify-between items-center mb-4 bg-white p-2 rounded-md shadow-sm">
          <Sort onSortChange={handleSortChange} />
        </div>
        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
};

export default Products;
