import React from 'react';
import {Text} from 'react-native';
import Widget from '../Widget/Widget';
import WidgetListItem from '../WidgetListItem/WidgetListItem';

const WidgetPanel = ({textGrey, headerStyle, header, data}) => {
  return (
    <>
      <Text style={headerStyle}>{header.toUpperCase()}</Text>
      {data.map(({key, value}) => (
        <WidgetListItem
          key={key}
          style={textGrey}
          key_string={key}
          value={value}
        />
      ))}
    </>
  );
};

export default Widget(WidgetPanel);
