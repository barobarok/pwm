import React from 'react';
import {Text} from 'react-native';

const WidgetListItem = ({style, key_string, value}) => {
  return (
    <Text style={style}>
      {key_string}: {value}
    </Text>
  );
};

export default WidgetListItem;
