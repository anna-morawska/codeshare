import React from 'react';
import {View, Button, TextInput} from 'react-native';

export const TodoInput = ({addTodo, inputValue, updateInput}) => (
  <View style={{flexDirection: 'row'}}>
    <TextInput
      style={{width: '80%'}}
      onChangeText={updateInput}
      value={inputValue}
    />
    <Button title={'Add Todo'} onPress={addTodo} />
  </View>
);
