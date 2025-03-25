import { createContext, useReducer, useContext } from "react";
import CartReducer from "../reducer/CartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_amount: 0,
  orders: [], // ✅ Initialize orders array
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (id, amount, product) => {
    console.log("Received in addToCart:", { id, amount, product });
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  const increaseQty = (id) => {
    dispatch({ type: "INCREASE_QTY", payload: id });
  };

  const decreaseQty = (id) => {
    dispatch({ type: "DECREASE_QTY", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const placeOrder = (orderDetails) => {
    dispatch({ type: "PLACE_ORDER", payload: orderDetails });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Correct useCartContext function
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useCartContext };
