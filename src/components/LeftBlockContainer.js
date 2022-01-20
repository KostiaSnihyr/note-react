import React from 'react';
import NoteForm from './NoteForm';

const LeftBlockContainer = ({ onSubmit, isActiveForm, deactivateForm }) => {
  return (
    <div className="left-block-container">
      <NoteForm
        onSubmit={onSubmit}
        isActiveForm={isActiveForm}
        deactivateForm={deactivateForm}
      />
    </div>
  );
};

export default LeftBlockContainer;
