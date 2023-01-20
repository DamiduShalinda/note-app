import React from 'react'
import AddNote from './AddNote'
import Notes from './Notes'

const NotesList = ({ notes , handleAddNote , deleteNote}) => {
  return (
    <div className='grid gap-4 grid-cols-4 items-center'>
    {notes.map((note) => (  
          <Notes text={note.text} date={note.date} id={note.id} deleteNote={deleteNote}/>
          ))}
    <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NotesList