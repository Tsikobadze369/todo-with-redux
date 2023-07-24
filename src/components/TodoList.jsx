import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-list__item">
          <span
            className={`todo-list__text ${todo.completed ? "completed" : ""}`}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className="todo-list__button"
          >
            Delete
          </button>
          <button
            onClick={() => handleToggleTodo(todo.id)}
            className="todo-list__button"
          >
            {todo.completed ? "Undone" : "Done"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
