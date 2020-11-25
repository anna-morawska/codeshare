import React from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import store from '@codeshare/common/models/store';
import {
  TodoInputController,
  TodoListController,
  VisibilityFiltersController,
} from '@codeshare/common/controllers';
import {Todo, TodoInput, VisibilityFilters} from './components';

const App = () => (
  <Provider store={store}>
    <TodoInputController
      render={({inputValue, updateInput, addTodo}) => (
        <TodoInput
          updateInput={updateInput}
          inputValue={inputValue}
          addTodo={addTodo}
        />
      )}
    />
    <TodoListController
      render={({todos, toggleTodo}) => (
        <View>
          {todos && todos.length ? (
            todos.map(({content, completed, id}) => (
              <Todo
                key={id}
                content={content}
                completed={completed}
                id={id}
                toggleTodo={toggleTodo}
              />
            ))
          ) : (
            <Text>No todos, yay! ✨</Text>
          )}
        </View>
      )}
    />
    <VisibilityFiltersController
      render={({setFilter, activeFilter}) => (
        <VisibilityFilters setFilter={setFilter} activeFilter={activeFilter} />
      )}
    />
  </Provider>
);

export default App;
