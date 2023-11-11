import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    addToRecipes: async(state, recipes) => {
        state = [...recipes];
    }
});

export const {addToRecipes} = recipesSlice.actions;
export default recipesSlice.reducer;