import React from "react";

export const Todo = ({ content, completed, id, toggleTodo }) => (
  <li style={{ listStyle: "none" }} onClick={() => toggleTodo(id)}>
    {completed ? "✅" : "❌"} <span>{content}</span>
  </li>
);
