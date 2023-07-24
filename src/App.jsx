import React from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";
import "./App.css"; // Import the App.css file

function App() {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="todo-form">
        <Todo />
      </div>
      <TodoList />
      <div className="completed-todo-list">
        <CompletedTodoList />
      </div>
    </div>
  );
}

export default App;
