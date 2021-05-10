import {useState} from 'react';

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');

    const charlimit = 300;

    const handleChange = (event) => {
        if (charlimit - event.target.value.length >= 0)
        {
            setNoteText(event.target.value);    
        }
        

    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0)
        {
            handleAddNote(noteText);
            setNoteText(''); 
        }
        
    };

    return (<div className="note new">
        <textarea
            rows="8"
            cols="10"
            placeholder="Enter your Task/Idea..."
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className="note-footer"><small>{charlimit-noteText.length }  remaining</small></div>
        <button className="save" onClick={handleSaveClick}>Save</button>
    </div>)
};

export default AddNote;