import React from "react";

const AddNoteButton = ({ handleClick }) => {
  return (
    <div className="addNoteBtn" onClick={() => handleClick()}>
      <h2>Add Note</h2>
    </div>
  );
};

export default AddNoteButton;
