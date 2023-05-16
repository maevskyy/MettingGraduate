import { createSlice } from "@reduxjs/toolkit";
import { MdFaceRetouchingNatural } from "react-icons/md";

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
        changeText: (state, action) => {
           return [
              ...state.filter(el => el.id !== action.payload.id),
              action.payload
           ]
        },
        deleted: (state,action) => {
            return state.filter(el =>  el.id !== action.payload.id)
        }
    }})

// export const {toggleCondition} = search Slice.actions
export default NotesSlice.reducer
export const {add, deleted, changeText} = NotesSlice.actions