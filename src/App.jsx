import { Routes, Route, Router } from 'react-router-dom';
import Schedule from './pages/schedule/Schedule';
import Tasks from './pages/tasks/Tasks';
import Navbar from './components/navBar/Navbar';
// import Header from './pages/header/Header';
import Today from './pages/today/Today';
import Notes from './pages/notes/Notes';
import NotesItem from './pages/notes/NotesItem'
import Settings from './pages/settings/Settings';
import User from './pages/user/User';
import NotFound from './pages/notFound/NotFound';

import { useSelector, useDispatch } from 'react-redux';
import { toggleCondition } from './components/navBar/navBarSearch/navBarSearch.slice';
import NotesCreateNote from './pages/notes/NotesCreateNote';
const App = () => {
  const searchCondition = useSelector((el) => el.searchReducer.condition);
  const disptach = useDispatch();

  return (
    <>
      <div className="flex relative  overflow-hidden">
        <Navbar />
        <main className="h-[100vh] w-[100%] ml-[4em] ">
          {/* <Header/> */}
          <Routes>
            <Route
              path="/"
              element={<Today />}
            />
            <Route
              path="/Schedule"
              element={<Schedule />}
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
              path="*"
              element={<NotFound />}
            />
              <Route
                path="/Notes/:id"
                element={<NotesItem/>}
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
