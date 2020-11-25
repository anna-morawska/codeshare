import React from "react";

export const TodoInput = ({ addTodo, inputValue, updateInput }) => (
  <div>
    <input onChange={(e) => updateInput(e.target.value)} value={inputValue} />
    <button className="add-todo" onClick={addTodo}>
      Add Todo
    </button>
  </div>
);
