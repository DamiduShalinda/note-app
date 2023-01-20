import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import Header from "./Components/Header";
import NotesList from "./Components/NotesList"
import Search from "./Components/Search";


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

      const [searchText , setSearchText] =useState('');
      const [darkMode , setDarkMode] = useState(false);

      useEffect(() => {
        const savedNotes = JSON.parse(
          localStorage.getItem('react-notes-app-data')
        );
    
        if (savedNotes) {
          setNotes(savedNotes);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem(
          'react-notes-app-data',
          JSON.stringify(notes)
        );
      }, [notes]);

    const addNots = (text) => {
      const date = new Date();
      const newNote= {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
      }
      const newNotes = [...notes , newNote];
      setNotes(newNotes);
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    const toggleMode = () => {
      setDarkMode(!darkMode);
    }



    

  return (
    <div className={`${darkMode && 'darkMode'}`}>
    <div className="max-w-[1200px] items-center mx-auto mt-4 max-h-[100vh]">
    <Header handleDarkMode={toggleMode}/>
    <Search handleSearchNote={setSearchText}/>
    <NotesList 
      notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
      handleAddNote={addNots} deleteNote={deleteNote}/>
    </div>
    </div>
  )
}

export default App
