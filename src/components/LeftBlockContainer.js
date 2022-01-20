import React from 'react';
import NoteArticle from './NoteArticle';
import NoteForm from './NoteForm';

const LeftBlockContainer = ({
  onSubmit,
  isActiveForm,
  deactivateForm,
  boolState,
  activeArticleData,
}) => {
  if (boolState) {
    return (
      <div className="left-block-container">
        <NoteForm
          onSubmit={onSubmit}
          isActiveForm={isActiveForm}
          deactivateForm={deactivateForm}
          activeArticleData={activeArticleData}
        />
      </div>
    );
  } else {
    return <NoteArticle activeArticleData={activeArticleData} />;
  }
};

export default LeftBlockContainer;
