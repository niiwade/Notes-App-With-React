import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList"

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "1st",
      date: "132441",
    },

    {
      id: nanoid(),
      text: "2nd",
        date: "12344",
    },
    
    {
      id: nanoid(),
      text: "3rd",
        date: "12223",
      }
  ]);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes); 
  }
  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}/>
  </div>
  );
}

export default App;