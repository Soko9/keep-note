import React, { useContext } from 'react';
import Note from './Note';
import { GlobalContext } from '../global/GlobalStore';

function NoteContainer() {
    const { notes } = useContext(GlobalContext);

    return (
        <div className="note-container-component">
            {notes.map((note, index) => {
                return (<Note key={index} note={note} />);
            })}
        </div>
    );
}

export default NoteContainer;