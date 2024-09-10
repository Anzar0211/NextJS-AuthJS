const { createSlice } = require("@reduxjs/toolkit")


const initialState={
    cartItems:[],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Find if the item already exists
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        // If the item exists, you might want to update its quantity or other properties
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          // Update properties as needed, for example, increase quantity
        };
      } else {
        // Item does not exist, add a new item
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      let copyCartItems = [...state.cartItems];
      copyCartItems = copyCartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = copyCartItems;
      return state;
    },
  },
});

export const {addToCart,removeFromCart}=cartSlice.actions
export default cartSlice.reducer