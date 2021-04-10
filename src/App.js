import logo from './logo.svg';
import './App.css';
import Draggable from 'react-draggable';
import Window from './Window';

function App() {
  return (
    <div className="App">
          <Window>
            <p>test</p>
          </Window>

          <Window></Window>
          <Window></Window>
    </div>
  );
}

export default App;
