import React from "react";
import { useCartContext } from "../context/CartContaxt";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cart, total_amount, increaseQty, decreaseQty, removeItem } =
    useCartContext();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5 text-center">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-500">Your cart is empty.</p>
          <button
            onClick={() => navigate("/products")}
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items Section */}
          <div className="w-full md:w-3/4 bg-white shadow-md p-4 rounded-lg">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border-b">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <p className="text-green-600 text-sm">In Stock</p>

                  {/* Quantity Control */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 border rounded bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="mx-3">{item.amount}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 border rounded bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="mt-3 flex gap-4">
                    <button className="text-blue-500 hover:underline">
                      Save for later
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 flex items-center gap-1 hover:underline"
                    >
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                </div>

                {/* Item Subtotal */}
                <div className="text-lg font-semibold text-gray-900">
                  ${(item.price * item.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="w-full md:w-1/4 bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            <p className="text-gray-600 mt-2">
              Total Items: <span className="font-bold">{cart.length}</span>
            </p>
            <p className="text-lg font-bold mt-2">
              Total Amount:{" "}
              <span className="text-green-600">${total_amount.toFixed(2)}</span>
            </p>

            {/* Checkout & Continue Shopping Buttons */}
            <div className="mt-4 flex flex-col gap-3">
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={() => navigate("/products")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
