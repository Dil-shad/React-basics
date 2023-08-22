import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.splice(0,10)));
  }, []);
  return (
    <Container>
      <div className="App">
        <h1  className="bg-primary text-white">Fetch API Data</h1>
        {posts.map((post)=>(
           <div key={post.id} className="bg-dark">
            <h1 className="text-info">{post.title}</h1>
            <p className="text-white">{post.body}</p>
           </div>
        ))}
      </div>
    </Container>
  );
}

export default App;
