import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo as addTodoAction } from "../models/actions";

export const TodoInputController = ({ render }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const updateInput = (value) => {
    setInputValue(value);
  };

  const addTodo = () => {
    dispatch(addTodoAction(inputValue));
    setInputValue("");
  };

  return render({ inputValue, updateInput, addTodo });
};
