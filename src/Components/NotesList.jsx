import React from 'react'
import Notes from './Notes'

const NotesList = () => {
  return (
    <div className='grid gap-4 grid-cols-4 items-center'>
        <Notes/>
        <Notes/>
        <Notes/>
        <Notes/>
    </div>
  )
}

export default NotesList