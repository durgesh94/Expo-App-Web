import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./features/CartSlice";
import restaurantReducer from './features/RestaurantSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        restaurant: restaurantReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>