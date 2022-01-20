import React, { useState } from 'react';
import LeftBlockContainer from './LeftBlockContainer';
import NoteList from './NoteList';
import '../styles/global.css';

const NoteApp = () => {
  const [data, setData] = useState([]);
  const [boolState, setBoolState] = useState(false);

  const activateForm = (status) => {
    if (!boolState) {
      setBoolState(status);
    }
  };

  const deactivateForm = () => {
    setBoolState(false);
  };

  const createNote = (newNote) => {
    const newNotes = [newNote, ...data];
    setData(newNotes);
    setBoolState(false);
  };

  return (
    <div className="note-app">
      <LeftBlockContainer
        onSubmit={createNote}
        isActiveForm={boolState}
        deactivateForm={deactivateForm}
      />
      <NoteList items={data} activateForm={activateForm} />
    </div>
  );
};

export default NoteApp;
