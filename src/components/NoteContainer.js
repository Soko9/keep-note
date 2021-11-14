import React from 'react';
import Note from './Note';

function NoteContainer() {
    return (
        <div className="note-container-component">
            <Note />
            <Note />
            <Note />
        </div>
    );
}

export default NoteContainer;