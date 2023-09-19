import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {

            const Exist = state.cart.find((item) => item.id === action.payload.id);
            if (Exist) {
                state.cart = state.cart.map((item) => item.id === action.payload.id ?
                    { ...item, qty: item.qty + 1 } : item)
            }
            else {
                state.cart.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)

        },
        incrementItem: (state, action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ?
                { ...item, qty: item.qty + 1 } : item)
        },
        decrementItem: (state, action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ?
                { ...item, qty: item.qty - 1 } : item)
        }
    },
});

export const { addToCart, removeFromCart, incrementItem, decrementItem } = CartSlice.actions;
export default CartSlice.reducer;