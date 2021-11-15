import React, { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { GlobalContext } from '../global/GlobalStore';

function NotePlate() {
    const { addNote } = useContext(GlobalContext);
    const [title, updateTitle] = useState("");
    const [note, updateNote] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        var currentdate = new Date(); 
        var datetime = "Wrote on: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        
        var newNote = {
            title: title,
            note: note,
            datetime: datetime
        }

        addNote(newNote);
        updateTitle("");
        updateNote("");
    }

    return (
        <form className="note-plate-component" onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                name="title"
                placeholder="Note Title"
                value={title}
                onChange={(e) => updateTitle(e.target.value)}
            />
            <br/>
            <textarea
                name="note"
                placeholder="Note"
                rows="5"
                value={note}
                onChange={(e) => updateNote(e.target.value)}>
            </textarea>
            <IconButton
                className="btn-add-note"
                type="submit">
                    <NoteAddIcon className="btn-add-note-icon" />
            </IconButton>
        </form>
    );
}

export default NotePlate;