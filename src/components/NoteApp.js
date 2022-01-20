import React, { useState } from 'react';
import LeftBlockContainer from './LeftBlockContainer';
import NoteList from './NoteList';
import '../styles/global.css';

const NoteApp = () => {
  const [data, setData] = useState([]);
  const [boolState, setBoolState] = useState(false);
  const [activeArticleData, setActiveArticleData] = useState({});

  const activateForm = (status) => {
    if (!boolState) {
      setBoolState(status);
    }
  };

  const deactivateForm = () => {
    setBoolState(false);
  };

  const activateArticle = (id, title, content) => {
    setActiveArticleData({ id, title, content });
    deactivateForm();
  };

  const createNote = (newNote) => {
    const newNotes = [newNote, ...data];
    setData(newNotes);
    setBoolState(false);
  };

  const deleteNote = (deleteElementId) => {
    // console.log(data);

    const filteredData = data.filter(
      (element) => element.id !== deleteElementId
    );

    setData(filteredData);
    // setData([filteredData]);
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
      />
      <NoteList
        items={data}
        activateForm={activateForm}
        activateArticle={activateArticle}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default NoteApp;
