import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function NoteForm(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: { title, content },
    });

    setTitle('');
    setContent('');
  };

  return (
    <form
      className="note-form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        label="Title"
        fullWidth
      />
      <TextField
        onChange={(e) => setContent(e.target.value)}
        value={content}
        label="Content"
        fullWidth
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained">
        Create
      </Button>
      <Button variant="outlined">Cancel</Button>
    </form>
  );
}

export default NoteForm;
