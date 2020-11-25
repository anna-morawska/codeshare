import React from "react";
import { Provider } from "react-redux";
import store from "@codeshare/common/models/store";
import {
  TodoInputController,
  TodoListController,
  VisibilityFiltersController,
} from "@codeshare/common/controllers";
import { Todo, TodoInput, VisibilityFilters } from "./components";

function App() {
  return (
    <Provider store={store}>
      <TodoInputController
        render={({ inputValue, updateInput, addTodo }) => (
          <TodoInput
            updateInput={updateInput}
            inputValue={inputValue}
            addTodo={addTodo}
          />
        )}
      />
      <TodoListController
        render={({ todos, toggleTodo }) => (
          <ul style={{ listStyle: "" }}>
            {todos && todos.length
              ? todos.map(({ content, completed, id }) => (
                  <Todo
                    key={id}
                    content={content}
                    completed={completed}
                    id={id}
                    toggleTodo={toggleTodo}
                  />
                ))
              : "No todos, yay! ✨"}
          </ul>
        )}
      />
      <VisibilityFiltersController
        render={({ setFilter, activeFilter }) => (
          <VisibilityFilters
            setFilter={setFilter}
            activeFilter={activeFilter}
          />
        )}
      />
    </Provider>
  );
}

export default App;
