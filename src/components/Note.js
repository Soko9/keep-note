import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function Note() {
    return (
        <Card className="note-component">
            <CardHeader
                title={<h4>Header</h4>}
                subheader={<p>September 14, 2016</p>}/>
            <CardContent>This is the card contentThis is the card contentThis is the card contentThis is the card content</CardContent>
            <CardActions>
                <DeleteRoundedIcon
                    className="note-icon"
                    sx={{ color: '#A2D2FF' }} />
            </CardActions>
        </Card>
    );
}

export default Note;