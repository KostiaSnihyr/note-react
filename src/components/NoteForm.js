import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { generateId } from '../utils';

const NoteForm = ({
  onSubmit,
  isActiveForm,
  deactivateForm,
  isEdit,
  setIsEdit,
  editData,
  setEditData,
  data,
  setData,
}) => {
  const [title, setTitle] = useState(isEdit ? editData.title : '');
  const [content, setContent] = useState(isEdit ? editData.content : '');
  const CHARACTER_LIMIT = 12;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEdit) {
      onSubmit(
        {
          id: generateId(),
          title,
          content,
        },
        false
      );
    } else {
      onSubmit(
        {
          id: editData.id,
          title,
          content,
        },
        true
      );
    }

    setTitle('');
    setContent('');
    setIsEdit(false);
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    deactivateForm();
  };

  return (
    <form
      className={
        isActiveForm ? 'note-app-form note-app-form-visible' : 'note-app-form'
      }
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 className="note-app-title">Create Note</h2>
      <TextField
        maxLength={2}
        className="note-app-form-title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        label="Title"
        fullWidth
        // inputProps={{ maxLength: 12 }}
        helperText={`Max lenght: ${title.length}/${CHARACTER_LIMIT}`}
      />
      <TextField
        className="note-app-form-content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        label="Content"
        fullWidth
        multiline
        rows={4}
        // inputProps={{ maxLength: 12 }}
        helperText={`Max lenght: ${content.length}/${CHARACTER_LIMIT}`}
      />
      <Button
        type="submit"
        variant="contained"
        className="note-app-form-submit"
      >
        Create
      </Button>
      <Button
        variant="outlined"
        className="note-app-form-cancel"
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </form>
  );
};

export default NoteForm;
