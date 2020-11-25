import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const Todo = ({content, completed, id, toggleTodo}) => (
  <TouchableOpacity onPress={() => toggleTodo(id)}>
    <Text>
      {completed ? '✅' : '❌'}
      {content}
    </Text>
  </TouchableOpacity>
);
