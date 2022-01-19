import React, { useState } from 'react';
import NoteForm from './NoteForm';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Note({ notes, editNote, deleteNote }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitEdit = (value) => {
    editNote(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <NoteForm edit={edit} onSubmit={submitEdit} />;
  }

  return notes.map((note) => (
    <Card variant="outlined" key={note.id}>
      <CardContent>
        <Typography>{note.text.title}</Typography>
        <Typography>{note.text.content}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setEdit({ id: note.id, value: note.text })}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  ));
}

export default Note;
