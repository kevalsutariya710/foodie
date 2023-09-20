import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./slice/CartSlice";
import categorySlice from "./slice/categorySlice";
import SearchSlice from "./slice/SearchSlice";

const Store = configureStore({

    reducer: {
        cart: CartSlice,
        category: categorySlice,
        search: SearchSlice,
    }

})

export default Store;