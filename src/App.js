import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main className="App-main">
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Oksana and is{" "}
          <a
            href="https://github.com/Oksana796/dictionary-app"
            className="GitHub-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dictionary-app-ok.netlify.app"
            className="GitHub-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
