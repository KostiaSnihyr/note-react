import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { generateId } from '../utils';

const NoteForm = ({ onSubmit, isActiveForm }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: generateId(),
      title,
      content,
    });
  };

  return (
    <form
      className={
        isActiveForm ? 'note-app-form note-app-form-visible' : 'note-app-form'
      }
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 className="note-app-title">Create Note</h2>
      <TextField
        className="note-app-form-title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        label="Title"
        fullWidth
      />
      <TextField
        className="note-app-form-content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        label="Content"
        fullWidth
        multiline
        rows={4}
      />
      <Button
        type="submit"
        variant="contained"
        className="note-app-form-submit"
      >
        Create
      </Button>
      <Button variant="outlined" className="note-app-form-cancel">
        Cancel
      </Button>
    </form>
  );
};

export default NoteForm;
