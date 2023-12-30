import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showCart: false,
}


const slice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        toggleShowCart(state, action) {
            state.showCart = action.payload;
        }
    }
});


export const { toggleShowCart } = slice.actions;

export default slice.reducer;