
import { createSlice } from "@reduxjs/toolkit";

const initialState = {name: "Brasov"}

export const citySlice = createSlice({
    name: "city",
    initialState: {value: initialState},
    reducers: {
        updateCity:(state, action) =>{
            state.value = action.payload;
        },
    }
})


export const {updateCity,} = citySlice.actions;
export default citySlice.reducer;