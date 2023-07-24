import React from "react";
import { useSelector } from "react-redux";

const CompletedTodoList = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed)
  );

  const memoizedCompletedTodos = React.useMemo(
    () => completedTodos,
    [completedTodos]
  );

  return (
    <div className="completed-todo-list">
      <h2>Completed Todos</h2>
      {memoizedCompletedTodos.length > 0 ? (
        <ul className="completed-todo-list__list">
          {memoizedCompletedTodos.map((todo) => (
            <li key={todo.id} className="completed-todo-list__item">
              {todo.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No completed todos yet.</p>
      )}
    </div>
  );
};

export default CompletedTodoList;
