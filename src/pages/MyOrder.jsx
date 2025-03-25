import React from "react";
import { useCartContext } from "../context/CartContaxt";

const MyOrders = () => {
  const { orders } = useCartContext();

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center">My Orders</h2>
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders placed yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-4 shadow rounded">
              <h3>Order ID: {order.id}</h3>
              <p>Date: {order.date}</p>
              <p className="text-green-600 font-bold">Total: ${order.total.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
