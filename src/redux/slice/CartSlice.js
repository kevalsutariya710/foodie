import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const index = state.cart.indexOf(action.payload);
            state.cart.splice(index, 1)
            state.cart = [...state.cart]

        },
    },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;