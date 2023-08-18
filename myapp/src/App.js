import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import States from "./components/States.js";
import { Container } from "react-bootstrap";

function App() {
  const states = [
    { name: "Kerala", language: "Malayalam", population: 1000 },
    { name: "Tamilnadu", language: "Tamil", population: 2000 },
    { name: "Andra", language: "Telugu", population: 3000 },
    { name: "Delhi", language: "Hindi", population: 5000 },
  ];

  return (
    <div className="App">
      <Container>
        <States States={states} />
      </Container>
    </div>
  );
}

export default App;
