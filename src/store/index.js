// import configureStore
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

/**
 * Buat Store: state global
 * Menyimpan berbagai slice reducer
 */

const store = configureStore({
    reducer: {
        movies: moviesReducer, 
    },
});

export default store;