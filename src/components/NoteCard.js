import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";
import { blue, green, pink, yellow } from "@mui/material/colors";

const useStyles = makeStyles({});
const avatarColor = (note) => {
  if (note.category === "work") {
    return yellow[700];
  }
  if (note.category === "money") {
    return green[500];
  }
  if (note.category === "todos") {
    return pink[500];
  }
  return blue[500];
};

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <Card elevation={2} className={classes.test}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: avatarColor(note) }}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutline />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
