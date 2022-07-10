import { createSlice } from '@reduxjs/toolkit';
import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';
import { MenuType } from '../../../models/Menu';
import { RootState } from "../../index";
// Define a type for the slice state
interface CartState {
    items: MenuType[];
}

// Define the initial state using that type
const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload?.id);
            let newCart = [...state.items];
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.log(`Can't remove product id ${action.payload?.id} as its not in carts.`)
            }
            state.items = newCart;
        }
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsById = (state: RootState, id: number) => state.cart.items.filter(item => item.id === id);

export const selectCartTotal = (state: RootState) => state.cart.items.reduce((total, item) => total += item.price, 0);

export default cartSlice.reducer