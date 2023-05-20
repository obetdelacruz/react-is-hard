import Note from "./Note";
import { useEffect } from "react";
import axios from "axios";

function NoteList({ notes, setNotes }) {
  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then((response) => setNotes(response.data));
  }, [setNotes]);

  return (
    <ul>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default NoteList;
