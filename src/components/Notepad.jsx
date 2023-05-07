import React from "react";
import Note from "./Note";

const Notepad = ({ notes }) => {
  return (
    <div className="notePad">
      {notes.map((note, index) => {
        return <Note title={note.title} text={note.text} key={index} />;
      })}
    </div>
  );
};

export default Notepad;
