import { createSlice } from "@reduxjs/toolkit";
import { allMangas } from "../../dataMangas/dataMangas";
import allCategories from "../../dataMangas/categories.json";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      products: allMangas,
      categories: allCategories,
      categorySelected: "",
      productIdSelected: null,
      productsFilteredByCategory: [],
    },
  },
  reducers: {
    setCategorySelected: (state, action) => {
      const categorySelected = action.payload;
      productsFiltered = allMangas.filter(
        (manga) => manga.category === categorySelected
      );
      state.value.categorySelected = categorySelected;
      state.value.productsFilteredByCategory = productsFiltered;
    },
    setProductIdSelected: (state, action) => {
      state.value.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
