import React from "react";
import "./note.css";
const Note = ({ id, title, text, deleteNoteHandler }) => {
  return (
    <div className="card">
      <h2 className="note-title">{title}</h2>
      <div className="content">
        <p>{text}</p>
      </div>
      <button className="btn" onClick={() => deleteNoteHandler(id)}>
        Delete
      </button>
    </div>
  );
};

export default Note;
