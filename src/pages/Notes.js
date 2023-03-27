import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Masonry from "react-masonry-css";

import { Container } from "@material-ui/core";
import NoteCard from "../components/NoteCard";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    // eslint-disable-next-line eqeqeq
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };
  const breakPoint = {
    dafault: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakPoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
export default Notes;
