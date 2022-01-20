import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Note = ({
  id,
  title,
  content,
  activateArticle,
  deleteNote,
  editNote,
}) => {
  const handleArticle = () => {
    activateArticle(id, title, content);
  };

  const handleDelete = (event) => {
    event.stopPropagation();

    deleteNote(id);
  };

  const handleEdit = (event) => {
    event.stopPropagation();

    editNote(id, title, content);
  };

  return (
    <Card variant="outlined" className="note-card" onClick={handleArticle}>
      <CardContent>
        <Typography className="note-card-header">{title}</Typography>
        <Typography>{content}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handleEdit}>
          Edit
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Note;
