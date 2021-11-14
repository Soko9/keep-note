import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function NotePlate() {
    const [title, updateTitle] = useState("");
    const [note, updateNote] = useState("");

    return (
        <form className="note-plate-component">
            <input
                type="text"
                placeholder="Note Title"
                value={title}
                onChange={(e) => updateTitle(e.target.value)}
            />
            <br/>
            <textarea
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