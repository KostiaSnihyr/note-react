import React from 'react';
import NoteArticle from './NoteArticle';
import NoteForm from './NoteForm';

const LeftBlockContainer = ({
  onSubmit,
  isActiveForm,
  deactivateForm,
  boolState,
  activeArticleData,
  isEdit,
  setIsEdit,
  editData,
  setEditData,
  data,
  setData,
}) => {
  if (boolState) {
    return (
      <div className="left-block-container">
        <NoteForm
          onSubmit={onSubmit}
          isActiveForm={isActiveForm}
          deactivateForm={deactivateForm}
          activeArticleData={activeArticleData}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editData={editData}
          setEditData={setEditData}
          data={data}
          setData={setData}
        />
      </div>
    );
  } else {
    return <NoteArticle activeArticleData={activeArticleData} />;
  }
};

export default LeftBlockContainer;
