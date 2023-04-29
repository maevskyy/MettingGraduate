import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        condition: false,
    },
    reducers: {
        toggleCondition: (state) => {
            state.condition = !state.condition  
        }
    }
})

export const {toggleCondition} = searchSlice.actions
export default searchSlice.reducer