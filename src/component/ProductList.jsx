import React from "react";
import {
  ChevronDown,
  ShoppingCart,
  Star,
  StarHalf,
  StarOff,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const ProductList = ({ products = [] }) => {
  const navigate = useNavigate();

  if (!Array.isArray(products)) {
    return (
      <p className="text-red-500">Error: Products data is not an array.</p>
    );
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center text-yellow-500">
        {[...Array(fullStars)].map((_, index) => (
          <Star key={index} fill="currentColor" className="w-5 h-5" />
        ))}
        {halfStar && (
          <StarHalf className="w-5 h-5 fill-yellow-500 stroke-yellow-500" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <StarOff key={index} className="w-5 h-5 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() =>
              navigate(`/product/${product.id}`, { state: { product } })
            }
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-contain rounded-md"
            />
            <h3 className="font-semibold text-lg mt-2 truncate">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{product.category}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold text-lg text-blue-600">
                ${product.price}
              </p>
              <div className="flex flex-col items-end">
                {renderStars(product.rating?.rate || 0)}
                <p className="text-gray-500 text-xs">
                  ({product.rating?.count} reviews)
                </p>
              </div>
            </div>
            <NavLink to="/cart">
              <button className="mt-3 w-full bg-blue-500 text-white py-2 flex items-center justify-center rounded-lg hover:bg-blue-600 transition">
                <ShoppingCart className="mr-2" /> Add to Cart
              </button>
            </NavLink>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center w-full">No products found</p>
      )}
    </div>
  );
};

export default ProductList;
