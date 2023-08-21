import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Keys from "./components/Keys/Keys";
import { Container } from "react-bootstrap";

function App() {
  const isLoggedIn = true; // Used
  return (
    <Container>
      <div className="App">
        <Keys />
      </div>
    </Container>
  );
}

export default App;
