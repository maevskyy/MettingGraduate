import { createSlice } from '@reduxjs/toolkit';

const dateBlock = {
  date: '',
  notesCards: [],
  calendarCards: [],
  todoCards: {
    current: [],
    completed: [],
    deleted: [],
  },
};

export const ScheduleSlice = createSlice({
  name: 'Schedule',
  initialState: [
    {
      date: '2020 05 23',
      notesCards: [],
      calendarCards: [
        {
          id: 12,
          title: 'Default Title',
          date: '2020 05 23',
          hourFrom: '',
          hourTill: '',
          hourFromPx: '0px',
          hourTillPx: '505px',
          guests: [],
          location: '',
          description: '',

        },
      ],
      todoCards: {
        current: [],
        completed: [],
        deleted: [],
      },
    },
  ],
  reducers: {
    addCalendarEvent: (state, action) => {
      if (state.some((obj) => obj.date === action.payload.date)) {
        //! мне больно сюда смотреть, может find был бы лучше, но пока работает - не трогаем
        [
          ...state.filter((obj) => {
            if (obj.date === action.payload.date) {
              obj.calendarCards.push(action.payload);
            }
          }),
        ];
      } else {
        [
          ...state,
          state.push({
            ...dateBlock,
            date: action.payload.date,
            calendarCards: [action.payload],
          }),
        ];
      }
    },
    changeCalendarEvent: (state, action) => {},
    deleteCalendarEvent: (state, action) => {},
    addTaskEvent: (state, action) => {
      if (state.some((obj) => obj.date === action.payload.date)) {
        [
          ...state.filter((obj) => {
            if (obj.date === action.payload.date) {
              obj.todoCards.current.push(action.payload);
            }
          }),
        ];
      } else {
        [
          ...state,
          state.push({
            ...dateBlock,
            date: action.payload.date,
            todoCards: {
              completed: [],
              deleted: [],
              current: [action.payload],
            },
          }),
        ];
      }
    },
    changeTaskEvent: (state, action) => {},
    deleteTaskEvent: (state, action) => {},

    addNoteEvent: (state, action) => {},
    changeNoteEvent: (state, action) => {},
    deleteNoteEvent: (state, action) => {},
  },
});

export default ScheduleSlice.reducer;
export const {
  addCalendarEvent,
  addTaskEvent,
  addNoteEvent,
  changeCalendarEvent,
  changeTaskEvent,
  changeNoteEvent,
  deleteCalendarEvent,
  deleteTaskEvent,
  deleteNoteEvent,
} = ScheduleSlice.actions;
