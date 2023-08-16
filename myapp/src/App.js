import "./App.css";

function App() {
  const name = "jay";
  var a = 15;
  var b = 20;
  console.log(a);
  const massage = () => {
    return "good morning";
  };
  return (
    <>
      <table>
        <Row />
        <Column />
      </table>
    </>
  );
}

function Row(params) {
  return (
    <>
      <tr>
        <th>Name</th>
        <th>Address</th>
      </tr>
    </>
  );
}
function Column(params) {
  return (
    <>
      <tr>
        <td>Dilshad</td>
        <td>Puthen</td>
      </tr>
    </>
  );
}
export default App;

{
  /* <div className="App">
<h1 className="heading">Hello world</h1>
<h1> MY name is {name} </h1>
<h3>{10 + 20}</h3>
<h2>{a + b}</h2>
<h5>{massage}</h5>
</div> */
}
