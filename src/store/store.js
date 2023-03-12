import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./shoppin-cart/cartSlice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
    }

})

export default store;