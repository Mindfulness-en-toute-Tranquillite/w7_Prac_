import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "../modules/cardsSlice";

const store = configureStore({
    reducer: {
        cardsSlice
    },
});

export default store;