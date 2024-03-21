import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      products: [],
      categories: {},
      categorySelected: "",
      productIdSelected: null,
      productsFilteredByCategory: [],
    },
  },
  reducers: {
    setCategorySelected: (state, action) => {
      const categorySelected = action.payload;
      productsFiltered = state.value.products.filter(
        (manga) => manga.category === categorySelected
      );
      state.value.categorySelected = categorySelected;
      state.value.productsFilteredByCategory = productsFiltered;
    },
    setProductIdSelected: (state, action) => {
      state.value.productIdSelected = action.payload;
    },
    setProducts: (state, action) => {
      const newMangas = action.payload;
      state.value = {
        ...state.value,
        products: newMangas,
      };
    },
    setCategories: (state, action) => {
      const newCategories = action.payload;
      state.value = {
        ...state.value,
        categories: newCategories,
      };
    },
  },
});

export const {
  setCategorySelected,
  setProductIdSelected,
  setProducts,
  setCategories,
} = shopSlice.actions;

export default shopSlice.reducer;
