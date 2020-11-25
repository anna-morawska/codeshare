import { useDispatch, useSelector } from "react-redux";
import { setFilter as setFilterAction } from "../models/actions";

export const VisibilityFiltersController = ({ render }) => {
  const activeFilter = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();

  const setFilter = (currentFilter) => {
    dispatch(setFilterAction(currentFilter));
  };

  return render({ setFilter, activeFilter });
};
