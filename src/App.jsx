import { Routes, Route } from 'react-router-dom';
import Calendar from './pages/calendar/Calendar';
import Tasks from './pages/tasks/Tasks';
import Navbar from './components/navBar/Navbar';
// import Header from './pages/header/Header';
import Today from './pages/today/Today';
import Notes from './pages/notes/Notes';
import Settings from './pages/settings/Settings';
import User from './pages/user/User';
import NotFound from './pages/notFound/NotFound';

import { useSelector, useDispatch } from 'react-redux';
import { toggleCondition } from './components/navBar/navBarSearch/navBarSearch.slice';
import NotesCreateNote from './pages/notes/NotesCreateNote'
const App = () => {
  const searchCondition = useSelector((el) => el.searchReducer.condition);
  const disptach = useDispatch();

  return (
    <>
      <div className="flex relative">
        <Navbar />
        <main className="h-[100vh] w-[100%] ml-[4em] ">
          {/* <Header/> */}
          <Routes>
            <Route
              path="/"
              element={<Today />}
            />
            <Route
              path="/Calendar"
              element={<Calendar />}
            />
            <Route
              path="/Notes"
              element={<Notes />}
            />
            <Route
              path="/Tasks"
              element={<Tasks />}
            />
            <Route
              path="/Settings"
              element={<Settings />}
            />
            <Route
              path="/User"
              element={<User />}
            />
            <Route
              path="/NotesCreateNote"
              element={<NotesCreateNote />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </main>
        {/* popups */}
        {searchCondition && (
          <article
            className="w-[100%] h-[100%] absolute flex justify-center items-center bottom-[2em] z-[51] "
            onClick={() => disptach(toggleCondition())}
          >
            <div
              className="w-[37em] h-[20em] bg-slate-50 shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            ></div>
          </article>
        )}
      </div>
    </>

    //#E5E5E5
  );
};

export default App;
