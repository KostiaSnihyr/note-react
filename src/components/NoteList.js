import React, { useState } from 'react';
import NoteForm from './NoteForm';
import Note from './Note';

function NoteList() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    const newNotes = [note, ...notes];
    setNotes(newNotes);
  };

  const editNote = (noteId, newValue) => {
    setNotes((prev) =>
      prev.map((item) => (item.id === noteId ? newValue : item))
    );
  };

  const deleteNote = (id) => {
    const filtedArr = [...notes].filter((note) => note.id !== id);
    setNotes(filtedArr);
  };

  return (
    <div>
      <div>NoteForm</div>
      <NoteForm onSubmit={addNote} />
      <Note notes={notes} editNote={editNote} deleteNote={deleteNote} />
    </div>
  );
}

export default NoteList;
