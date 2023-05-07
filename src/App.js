import "./App.css";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import Notepad from "./components/Notepad";

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Notepad />
      <AddNote className="addNote" />
    </div>
  );
}

export default App;
