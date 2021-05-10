import {useState} from 'react';

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    }

    const handleSaveClick = () => {
        handleAddNote(noteText);
    }

    return (<div className="note new">
        <textarea
            rows="8"
            cols="10"
            placeholder="Enter your Task/Idea..."
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className="note-footer"><small>300 remaining</small></div>
        <button className="save" onClick={handleSaveClick}>Save</button>
    </div>)
};

export default AddNote;