import { useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote";
import AddNoteButton from "./components/AddNoteButton";
import Header from "./components/Header";
import Notepad from "./components/Notepad";
// import useBodyScrollLock from "./useBodyScrollLock";

function App() {
  const [createNoteOpen, setCreateNoteOpen] = useState(false);
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  // const [isLocked, toggle] = useBodyScrollLock();

  function handleClick() {
    setCreateNoteOpen(!createNoteOpen);
    // toggle();
    console.log("cliock");
  }

  function addNoteHandler(noteTitle, text) {
    const newNote = {
      id: notes.length + 1,
      title: noteTitle,
      text: text,
    };
    setNotes([...notes, newNote]);
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log("note added");
    setCreateNoteOpen(false);
    console.log(notes);
  }
  function deleteNoteHandler(noteId) {
    const filteredNotes = notes.filter((note) => note.id !== noteId);
    setNotes(filteredNotes);
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log("note deleted");
  }

  return (
    <div className="App">
      <Header className="header" />
      <Notepad
        className="notePad"
        notes={notes}
        deleteNoteHandler={deleteNoteHandler}
      />
      {createNoteOpen && (
        <AddNote
          className="addNote"
          handleClick={handleClick}
          addNoteHandler={addNoteHandler}
        />
      )}
      {!createNoteOpen && (
        <AddNoteButton className="addNoteBtn" handleClick={handleClick} />
      )}
    </div>
  );
}

export default App;
