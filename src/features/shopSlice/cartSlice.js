import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      user: "userLogged",
      updatedAt: Date.now().toLocaleString(),
      total: null,
      items: [],
    },
  },
  reducers: {
    addItem: (state, action) => {
      const productRepeated = state.value.items.find(
        (item) => item.id === action.payload.id
      );
      if (productRepeated) {
        const itemsUpdated = state.value.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
        const total = itemsUpdated.reduce(
          (acc, currentItem) =>
            (acc += currentItem.price * currentItem.quantity),
          0
        );
        state.value = {
          ...state.value,
          items: itemsUpdated,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      } else {
        state.value.items.push(action.payload);
        const total = state.value.items.reduce(
          (acc, currentItem) =>
            (acc += currentItem.price * currentItem.quantity),
          0
        );
        state.value = {
          ...state.value,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      }
    },
    removeItem: (state, action) => {
      const newCart = state.value.items.filter(
        (item) => item.id !== action.payload
      );
      const total = newCart.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
      );
      state.value = {
        ...state.value,
        total,
        items: newCart,
      };
    },
    clearCart: (state) => {
      state.value = {
        ...state.value,
        items: [],
        total: null,
      };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
