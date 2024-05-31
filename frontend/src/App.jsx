import { useState, useEffect } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4002/todos")
      .then(async (res) => {
        const jsoni = await res.json();
        setTodos(jsoni.todos);
      })
      .catch((err) => console.error("Error fetching todos:", err));
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
