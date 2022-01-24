import React, { useState } from 'react';
import LeftBlockContainer from './LeftBlockContainer';
import NoteList from './NoteList';
import '../styles/global.css';

const NoteApp = () => {
  const [data, setData] = useState([]);
  const [boolState, setBoolState] = useState(false);
  const [activeArticleData, setActiveArticleData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  console.log(data);

  const activateForm = (status) => {
    if (!boolState) {
      setBoolState(status);
    }
  };

  const deactivateForm = () => {
    setBoolState(false);
    setIsEdit(false);
  };

  const activateArticle = (id, title, content) => {
    setActiveArticleData({ id, title, content });
    deactivateForm();
  };

  const createNote = (newNote, isEdit) => {
    if (!isEdit) {
      const newNotes = [newNote, ...data];
      setData(newNotes);
    } else {
      const newNotes = data.map((item) => {
        if (item.id === newNote.id) {
          return {
            id: newNote.id,
            title: newNote.title,
            content: newNote.content,
          };
        }
        return item;
      });

      setData(newNotes);
      setActiveArticleData(newNote);
    }

    setBoolState(false);
  };

  const deleteNote = (deleteElementId) => {
    const filteredData = data.filter(
      (element) => element.id !== deleteElementId
    );

    if (activeArticleData.id === deleteElementId) {
      activateArticle(0, 'You deleted this Article');
    }

    setData(filteredData);
  };

  const editNote = (id, title, content) => {
    activateForm(true);
    setIsEdit(true);
    setEditData({ id, title, content });
  };

  return (
    <div className="note-app">
      <LeftBlockContainer
        onSubmit={createNote}
        isActiveForm={boolState}
        deactivateForm={deactivateForm}
        articleData={data}
        boolState={boolState}
        activeArticleData={activeArticleData}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        editData={editData}
        setEditData={setEditData}
        data={data}
        setData={setData}
      />
      <NoteList
        items={data}
        activateForm={activateForm}
        activateArticle={activateArticle}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );
};

export default NoteApp;
