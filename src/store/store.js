import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./shoppin-cart/cartSlice";
import cartModalSlice from "./cartModal/cartModalSlice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        cartModal: cartModalSlice,
    }

})

export default store;