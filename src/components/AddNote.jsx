import React, { useState } from "react";
import "./addnote.css";

const AddNote = ({ handleClick, addNoteHandler }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  //   useEffect(() => {
  //     console.log(title);
  //     console.log(text);
  //   }, [title, text]);

  function handleAddClick() {
    addNoteHandler(title, text);
  }

  return (
    <div className="addNote">
      <div className="createNote">
        <div className="title">
          <input
            className="title-input"
            placeholder="Add Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="note-body">
          <div className="text-area">
            <input
              type="text"
              className="text-area-input"
              placeholder="Write here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="options-area">
            <button className="add-btn btn" onClick={handleAddClick}>
              Add
            </button>
            <button className="cancel-btn btn" onClick={handleClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
