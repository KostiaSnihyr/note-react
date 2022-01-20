import React from 'react';
import NoteForm from './NoteForm';

const LeftBlockContainer = ({ onSubmit, isActiveForm }) => {
  return (
    <div className="left-block-container">
      <NoteForm onSubmit={onSubmit} isActiveForm={isActiveForm} />
    </div>
  );
};

export default LeftBlockContainer;
