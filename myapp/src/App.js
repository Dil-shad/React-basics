import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Effects from "./components/Effects/Effects";

function App() {
  const isLoggedIn = true; // Used
  return (
    <Container>
      <div className="App">
        <Effects />
      </div>
    </Container>
  );
}

export default App;
