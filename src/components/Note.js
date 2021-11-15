import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { GlobalContext } from '../global/GlobalStore';

function Note({ key, note }) {
    const { deleteNote } = useContext(GlobalContext);

    const handleDelete = datetime => {
        deleteNote(datetime);
    }

    return (
        <Card key={key} className="note-component">
            <CardHeader
                title={<h4 className="note-title">{note.title}</h4>}
                subheader={<p>{note.date}</p>}/>
            <CardContent className="note-content">{note.note}</CardContent>
            <CardActions onClick={() => handleDelete(note.datetime)}>
                <DeleteRoundedIcon
                    className="note-icon"
                    sx={{ color: '#A2D2FF' }} />
            </CardActions>
        </Card>
    );
}

export default Note;