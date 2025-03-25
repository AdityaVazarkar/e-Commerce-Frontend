import { Star, StarHalf, StarOff } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FormatPrice from "../component/FormatPrice";
import AddToCart from "../component/AddToCart";

const SingleProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-xl font-semibold py-5"
      >
        Product not found
      </motion.div>
    );
  }

  const rating = product.rating?.rate || 0;
  const count = product.rating?.count || 0;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="container mx-auto p-5 max-w-6xl flex flex-col md:flex-row gap-10">
      {/* Product Image */}
      <div className="flex-1 flex justify-center items-center">
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-96 h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {product.title}
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          <FormatPrice price={product.price} />
        </p>

        {/* Ratings */}
        <div className="flex items-center mb-3">
          {Array(fullStars)
            .fill()
            .map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-500 stroke-yellow-500"
              />
            ))}
          {halfStar && (
            <StarHalf className="w-5 h-5 fill-yellow-500 stroke-yellow-500" />
          )}
          {Array(emptyStars)
            .fill()
            .map((_, i) => (
              <StarOff key={i} className="w-5 h-5 text-gray-300" />
            ))}
          <span className="ml-2 text-gray-700">
            {rating.toFixed(1)} ({count} reviews)
          </span>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          {product.description}
        </p>
        <p className="text-green-600 font-semibold mb-3">In Stock</p>
        <p className="text-gray-500 mb-4">Eligible for FREE Shipping</p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 max-w-xs">
          {/* <AddToCart product={product} /> */}
          {product && <AddToCart product={product} />}

          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow hover:bg-gray-800 transition duration-300"
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
