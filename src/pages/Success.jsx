import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-3xl font-bold text-green-600">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mt-2">Thank you for your purchase.</p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => navigate("/products")}
            className="w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/my-orders")}
            className="w-full px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow hover:bg-gray-800 transition"
          >
            My Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
