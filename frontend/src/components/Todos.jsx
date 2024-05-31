const Todos = ({ todos }) => {
  return (
    <div>
    
      {todos.map((todo, index) => (
        <div key={todo.id || index}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Completed" : "Not Completed"}</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
