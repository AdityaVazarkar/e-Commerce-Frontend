import React, { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useCartContext } from "../context/CartContaxt";
import { AuthContext } from "../context/AuthContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, total_amount, placeOrder } = useCartContext();
  const { user } = useContext(AuthContext); // Check user authentication

  // Redirect unauthenticated users to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "credit_card",
    cardNumber: "",
    paypalEmail: "",
    upiId: "",
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cart.length) {
      alert("Your cart is empty!");
      return;
    }

    const orderDetails = {
      id: new Date().getTime(),
      products: cart,
      total: total_amount,
      date: new Date().toLocaleDateString(),
      paymentMethod: shippingInfo.paymentMethod,
    };

    placeOrder(orderDetails);

    console.log("Order Placed Successfully:", orderDetails);
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Checkout
        </h2>

        {/* Total Amount */}
        <div className="text-xl font-bold text-gray-800 text-center mb-4">
          Total Amount:{" "}
          <span className="text-green-600">${total_amount.toFixed(2)}</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={shippingInfo.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={shippingInfo.address}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          {/* City & ZIP Code */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={shippingInfo.city}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-medium">
                ZIP Code
              </label>
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={shippingInfo.zip}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </div>

          {/* Payment Method Selection */}
          <div>
            <label className="block text-gray-700 font-medium">
              Payment Method
            </label>
            <select
              name="paymentMethod"
              value={shippingInfo.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          {/* Payment Fields Based on Selection */}
          {shippingInfo.paymentMethod === "credit_card" && (
            <div>
              <label className="block text-gray-700 font-medium">
                Credit Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                placeholder="Enter your card number"
                value={shippingInfo.cardNumber}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          )}

          {shippingInfo.paymentMethod === "paypal" && (
            <div>
              <label className="block text-gray-700 font-medium">
                PayPal Email
              </label>
              <input
                type="email"
                name="paypalEmail"
                placeholder="Enter your PayPal email"
                value={shippingInfo.paypalEmail}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          )}

          {shippingInfo.paymentMethod === "upi" && (
            <div>
              <label className="block text-gray-700 font-medium">UPI ID</label>
              <input
                type="text"
                name="upiId"
                placeholder="Enter your UPI ID"
                value={shippingInfo.upiId}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          )}

          {/* Place Order Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
