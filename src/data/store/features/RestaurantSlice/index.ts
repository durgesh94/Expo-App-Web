import { createSlice } from '@reduxjs/toolkit';
import { MenuType } from '../../../models/Menu';
import { RestauranType } from '../../../models/Restaurant';
import { RootState } from "../../index";

// Define a type for the slice state
interface RestaurantState {
    item: any;
}

// Define the initial state using that type
const initialState: RestaurantState = {
    item: null
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.item = action.payload;
        },
    },
})

export const { setRestaurant } = restaurantSlice.actions;

export const getRestaurant = (state: RootState) => state.restaurant.item;

export default restaurantSlice.reducer