import logo from './logo.svg';
import './App.css';
import { encypher } from './Helper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize: "80px"}}>
          The pass phrase is: {encypher("test cypher")}
        </p>
      </header>
    </div>
  );
}

export default App;
