import { createSlice } from "@reduxjs/toolkit";

export const testReducer = createSlice({
    name: 'test',
    initialState: {
        city: [],
        isLoading: false
    },
    reducers: {
        FETCH_CITY: (state) => {
            state.isLoading = true;
        },
        SET_CITY: (state,action) => {
            state.city = action.payload;
            state.isLoading = false;
        }
    }
})

export const { FETCH_CITY, SET_CITY } = testReducer.actions;

export default testReducer.reducer;