import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Todo from "./components/Todoapp/Todo"

function App() {
  return (
    <Container>
      <div className="App">
        <Todo />
      </div>
    </Container>
  );
}

export default App;
