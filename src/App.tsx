import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import "./App.css";

const initialTodos: Todo[] = [
  { text: "Feed Hudson", complete: false },
  { text: "Write app", complete: true },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    if (text !== "") {
      setTodos([...todos, newTodo]);
    } else {
      alert("Entry cannot be empty");
      console.log("error: empty entry");
    }
  };

  return (
    <div className="mainDiv">
      <h1>To Do - Typescript!</h1>
      <ul>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </ul>
    </div>
  );
}

export default App;
