import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Doe, Jane" age="45" hcolor="Black" />
      <Greet name="Smith, John" age="88" hcolor="Brown" />
      <Greet name="Fillmore, Millard" age="50" hcolor="Brown" />
      <Greet name="Smith, Maria" age="62" hcolor="Brown" />
    </div>
  );
}

export default App;
