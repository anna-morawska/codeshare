import React from 'react';
import {VISIBILITY_FILTERS} from '@codeshare/common/models/constants';
import {View, Button} from 'react-native';

export const VisibilityFilters = ({activeFilter, setFilter}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <View key={currentFilter} style={{margin: 10}}>
            <Button
              onPress={() => {
                setFilter(currentFilter);
              }}
              title={`${
                currentFilter === activeFilter ? '🔸' : ''
              }${currentFilter}`}
            />
          </View>
        );
      })}
    </View>
  );
};
