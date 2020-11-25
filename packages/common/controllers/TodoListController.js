import { useSelector, useDispatch } from "react-redux";
import { getTodosByVisibilityFilter } from "../models/selectors";
import { toggleTodo as toggleTodoAction } from "../models/actions";

export const TodoListController = ({ render }) => {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector((state) => state.visibilityFilter);

  const todos = useSelector((state) =>
    getTodosByVisibilityFilter(state, visibilityFilter)
  );

  const toggleTodo = (id) => {
    dispatch(toggleTodoAction(id));
  };

  return render({ todos, toggleTodo });
};
