import { Header } from "components/Header";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}