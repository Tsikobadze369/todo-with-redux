import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const id = Date.now().toString();
      dispatch({ type: "ADD_TODO", payload: { id, text: newTodo } });
      setNewTodo("");
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        className="todo-form__input"
      />
      <button onClick={handleAddTodo} className="todo-form__button">
        Add Todo
      </button>
    </div>
  );
};

export default Todo;
