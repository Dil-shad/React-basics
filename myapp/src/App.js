import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Products from "./components/Products/Products";

function App() {
  const isLoggedIn = true; // Used
  return (
    <Container>
      <div className="App">
        <Products />
      </div>
    </Container>
  );
}

export default App;
