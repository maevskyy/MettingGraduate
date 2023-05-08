import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../components/navBar/navBarSearch/navBarSearch.slice'
import notesReducer from '../pages/notes/Notes.slice';

export default configureStore({
  reducer: {
    searchReducer,
    notesReducer,
  },
});
