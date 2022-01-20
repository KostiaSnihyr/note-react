import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Note = ({ title, content }) => {
  return (
    <Card variant="outlined" className="note-card">
      <CardContent>
        <Typography className="note-card-header">{title}</Typography>
        <Typography>{content}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Note;
