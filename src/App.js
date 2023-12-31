import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="oslo" />
      <footer>
        <a href="https://github.com/farzanehFathi/react-weather-app">
          Open Source
        </a>{" "}
        code by Farzaneh
      </footer>
    </div>
  );
}

export default App;
