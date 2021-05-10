import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList"
import Search from './components/Search';
import Header from './components/Header'

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


  const [searchText, setSearchText] = useState('');

  const[darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const delnote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'darkMode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={ setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>

      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDelNote={delnote}
      />
  </div>
    </div>
  );
}

export default App;