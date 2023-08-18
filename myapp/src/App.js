import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import States from "./components/States.js";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <States name={"Kerala"} lang={"Malayalam"} population={1000}/>
        <States name={"Tamilnadu"} lang={"Tamil"} population={2000} />
        <States name={"Karnataka"} lang={"Kannada"} population={3000} />
        <States name={"Goa"} lang={"Goa"} population={5000} />
      </Container>
    </div>
  );
}

export default App;
