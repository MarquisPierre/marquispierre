import Me from './Me.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Me} className="App-logo" alt="Me" />
        <p>
          My Name is Marquis!
        </p>
        <a
          className="App-link"
          href="https://github.com/MarquisPierre/marquispierre"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out!
        </a>
      </header>
    </div>
  );
}

export default App;
