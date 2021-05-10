import {useState} from 'react';

const AddNote = () => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    }

    return (<div className="note new">
        <textarea
            rows="8"
            cols="10"
            placeholder="Enter your Task/Idea..."
            onChange={handleChange}
        ></textarea>
        <div className="note-footer"><small>300 remaining</small></div>
        <button className="save">Save</button>
    </div>)
};

export default AddNote;