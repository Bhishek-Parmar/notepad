import React from "react";
import Note from "./Note";
import "./notepad.css";

const Notepad = ({ notes, deleteNoteHandler }) => {
  return (
    <div className="notePad">
      {notes.map((note, index) => {
        return (
          <Note
            id={note.id}
            title={note.title}
            text={note.text}
            key={index}
            deleteNoteHandler={deleteNoteHandler}
          />
        );
      })}
    </div>
  );
};

export default Notepad;
