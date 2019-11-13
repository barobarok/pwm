import React from 'react';

import Widget from '../../global/components/Widget/Widget';
import WidgetListItem from '../../global/components/WidgetListItem/WidgetListItem';

const WidgetPanel = ({textGrey, header, data}) => {
  return (
    <>
      <Text>{header}</Text>
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
