import React from 'react';
import { Button } from '@mui/material';
import Note from './Note';

const NoteList = ({ items, activateForm }) => {
  const handleNoteForm = () => {
    activateForm(true);
  };

  return (
    <div className="note-app-note-list">
      <div className="note-app-note-list-header">
        <h2 className="note-app-title">Note List</h2>
        <Button
          variant="contained"
          className="note-app-create-form"
          onClick={handleNoteForm}
        >
          Create Note
        </Button>
      </div>
      <div className="note-app-note-list-container">
        {items.map((item) => (
          <Note key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
