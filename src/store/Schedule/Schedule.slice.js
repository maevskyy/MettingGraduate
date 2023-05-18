import { createSlice } from "@reduxjs/toolkit";

const dateBlock = {date: '', notesCards: [], calendarCards: [], todoCards: []}


export const ScheduleSlice = createSlice({
    name: 'Schedule',
    initialState: [],
    reducers: {
      addCalendarEvent: (state, action) => {
        if (state.some(obj => obj.date === action.payload.date)) {
          //! мне больно сюда смотреть, может find был бы лучше, но пока работает - не трогаем
          [
            ...state.filter(obj => {
              if (obj.date === action.payload.date) {
                obj.calendarCards.push(action.payload)
              }
            }),
            
          ]
        }
        else{
          [...state, state.push({...dateBlock, date: action.payload.date, calendarCards:[action.payload]})]
        }
      },
      addNoteEvent: (state, action) => {
        if (state.some(obj => obj.date === action.payload.date)) {
          [
            ...state.filter(obj => {
              if (obj.date === action.payload.date) {
                obj.notesCards.push(action.payload)
              }
            }),
            
          ]
        }
        else{
          [...state, state.push({...dateBlock, date: action.payload.date, notesCards:[action.payload]})]
        }
      }
    }
})

export default ScheduleSlice.reducer
export const {addCalendarEvent, addNoteEvent} = ScheduleSlice.actions

