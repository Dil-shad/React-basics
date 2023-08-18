import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import States from "./components/States.js";
import { Container } from "react-bootstrap";

function App() {
  let number = 1 ;
  //   const CheckNumber=({number}) => {
  //     if(number>0){
  //       return <h1>Positive Number</h1>
  //     }
  //     else if(number<0){
  //       return <h1>Negative Number</h1>
  //   }
  //   else{
  //     return <h1>Zero</h1>
  //   }
  // }

  return (
    <div className="App">
      <Container>
        <h1>Conditional-Rendering</h1>
        {/* <CheckNumber number={-1}/> */}
        {number > 0 ? (
          <h1>Positiv</h1>
        ) : number < 0 ? (
          <h1>Negative</h1>
        ) : (
          <h1>Zero</h1>
        )}
      </Container>
    </div>
  );
}

export default App;
