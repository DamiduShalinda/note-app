import { nanoid } from "nanoid"
import { useState } from "react"
import NotesList from "./Components/NotesList"


function App() {

      const [notes , setNotes] = useState([
        {
        id: nanoid(),
        text: "This is my first note",
        date: "18/01/2023"
        },
        {
        id: nanoid(),
        text: "This is my second note",
        date: "19/01/2023"
        },
        {
        id: nanoid(),
        text: "This is my third note",
        date: "20/01/2023"
        },
        {
          id: nanoid(),
          text: "This is my fourth note",
          date: "21/01/2023"
          }
    ]);

  return (
    <div className="max-w-[1200px] items-center mx-auto mt-4">
    <NotesList notes={notes}/>
    </div>
  )
}

export default App
