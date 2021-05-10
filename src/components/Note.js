import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return (
        <div className="note">

            <span>Hello, This is our Start</span>

            <div className="note-footer">
                <small>12/2/2021</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    )
}

export default Note;    