// components/CreateTodo.js
import { useState } from "react";
const CreateTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    
    fetch("http://localhost:4002/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      })
    })
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
        console.log(props);
        alert("todo added");
        
      })
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        // value={title}
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      />{" "}
      <br /> <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      />{" "}
      <br /> <br />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default CreateTodo;
