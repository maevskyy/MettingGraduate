import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const NotesSlice = createSlice({
    name: 'Notes',
    initialState,
    reducers: {
        add: (state, action) => {
            return [
                ...state,
                action.payload
            ]
        },
        deleted: (state,action) => {
            return state.filter(el =>  el.id !== action.payload.id)
        }
    }})

// export const {toggleCondition} = searchSlice.actions
export default NotesSlice.reducer
export const {add, deleted} = NotesSlice.actions