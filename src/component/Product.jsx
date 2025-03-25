import React, { useState, useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FormatPrice from "./FormatPrice";

const Product = () => {
  const { isLoading, products } = useProductContext();
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      setVisibleProducts(products.slice(0, 3));
    }
  }, [products]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 3) % products.length);
      setVisibleProducts(products.slice(index, index + 3));
    }, 3000);

    return () => clearInterval(interval);
  }, [index, products]);

  if (isLoading) {
    return (
      <div className="text-center text-xl font-semibold py-5">Loading...</div>
    );
  }

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Featured Products
      </h2>
      <div className="relative flex overflow-hidden w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full"
        >
          {visibleProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border rounded-xl p-5 shadow-lg bg-white hover:shadow-2xl transition cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover mb-4 rounded-lg"
                whileHover={{ scale: 1.1 }}
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-600 font-semibold text-2xl mb-2">
                <FormatPrice price={product.price} />
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
