import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../components/navBar/navBarSearch/navBarSearch.slice'

export default configureStore({
  reducer: {
    searchReducer,
  },
});
