import logo from "./logo.svg";
import "./App.css";
import Draggable from "react-draggable";
import Window from "./Window";
import ResumeWindow from "./ResumeWindow";
import SkillsWindow from "./SkillsWindow";

function App() {
  return (
    <div className="App">
      <ResumeWindow></ResumeWindow>
      <SkillsWindow></SkillsWindow>
    </div>
  );
}

export default App;
