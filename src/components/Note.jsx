import React from "react";
import "./note.css";
const Note = ({ title, text }) => {
  return (
    <div className="card">
      <h2 className="note-title">{title}</h2>
      <div className="content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Note;
