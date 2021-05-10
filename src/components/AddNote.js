import {useState} from 'react';

const AddNote = () => {
    const [noteText, setNoteText] = useState('');
    return (<div className="note new">
        <textarea rows="8" cols="10" placeholder="Enter your Task/Idea..."></textarea>
        <div className="note-footer"><small>300 remaining</small></div>
        <button className="save">Save</button>
    </div>)
};

export default AddNote;