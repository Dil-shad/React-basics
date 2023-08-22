import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MainRouter from "./components/ReactRouter/MainRouter";

function App() {
  return (
    <Container>
      <div className="App">
        <MainRouter />
      </div>
    </Container>
  );
}

export default App;
