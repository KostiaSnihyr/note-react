import React from 'react';

const NoteArticle = ({ activeArticleData }) => {
  return (
    // check if note article not deleted
    <div className="note-article">
      <h1>{activeArticleData.title}</h1>
      <p>{activeArticleData.content}</p>
    </div>
  );
};

export default NoteArticle;
