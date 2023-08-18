import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import States from "./components/States.js";
import { Container } from "react-bootstrap";
import Main from "./components/conditional/Main.js";

function App() {
  const isLoggedIn = true; // Used
  return (
    <div className="App">
      <Main isLoggedIn={isLoggedIn} /> {/* Fix: Removed curly braces */}
    </div>
  );
}

export default App;
