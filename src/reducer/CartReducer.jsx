const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;
    let existingProduct = state.cart.find((item) => item.id === id);

    let updatedCart;
    if (existingProduct) {
      updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + amount } : item
      );
    } else {
      let newProduct = { ...product, amount };
      updatedCart = [...state.cart, newProduct];
    }

    let totalAmount = updatedCart.reduce(
      (acc, curr) => acc + curr.price * curr.amount,
      0
    );

    return { ...state, cart: updatedCart, total_amount: totalAmount };
  }

  if (action.type === "INCREASE_QTY") {
    let updatedCart = state.cart.map((item) =>
      item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
    );

    let totalAmount = updatedCart.reduce(
      (acc, curr) => acc + curr.price * curr.amount,
      0
    );

    return { ...state, cart: updatedCart, total_amount: totalAmount };
  }

  if (action.type === "DECREASE_QTY") {
    let updatedCart = state.cart
      .map((item) =>
        item.id === action.payload
          ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 }
          : item
      )
      .filter((item) => item.amount > 0);

    let totalAmount = updatedCart.reduce(
      (acc, curr) => acc + curr.price * curr.amount,
      0
    );

    return { ...state, cart: updatedCart, total_amount: totalAmount };
  }

  // **Remove Item from Cart**
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((item) => item.id !== action.payload);

    let totalAmount = updatedCart.reduce(
      (acc, curr) => acc + curr.price * curr.amount,
      0
    );

    return { ...state, cart: updatedCart, total_amount: totalAmount };
  }
  if (action.type === "PLACE_ORDER") {
    return {
      ...state,
      orders: [...state.orders, action.payload],
      cart: [], // Clears cart
      total_amount: 0,
    };
  }

  return state;
};

export default CartReducer;
