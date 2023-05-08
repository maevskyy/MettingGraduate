import React from 'react'
import { Link } from 'react-router-dom'

const NotesMainEmpty = () => {
  return (
    <main className=' mx-[1.6em] h-[80%] mt-[1.5em] flex justify-center items-center'>
        <Link
          to='/NotesCreateNote'
          className="text-[#EE3637] font-semibold px-[.9em] py-[.5em] hover:bg-[#ee363638] rounded-[4px] duration-300 ease-in-out"
        >
          Create a new note
        </Link>
    </main>
  )
}

export default NotesMainEmpty