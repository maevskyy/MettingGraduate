import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: nanoid(), title: '08 Mon', cards: [] },
  { id: nanoid(), title: '09 Tue', cards: [] },
  { id: nanoid(), title: '10 Thu', cards: [] },
  { id: nanoid(), title: '11 Wen', cards: [] },
  { id: nanoid(), title: '12 Fri', cards: [] },
  { id: nanoid(), title: '13 Sat', cards: [] },
  { id: nanoid(), title: '14 Sun', cards: [] },
];

// till 13:00 - 505px 14:00 - 460px + 45

export const CalendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      [...state, state[action.payload.weekDay].cards.push(action.payload)]
    }
  },
});

export default CalendarSlice.reducer;
export const { addEvent } = CalendarSlice.actions;
