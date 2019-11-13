import React from 'react';
import {View, StyleSheet} from 'react-native';
import data from './data.json';
import InkListItem from './InkListItem/InkListItem';

const InkData = () => {
  return (
    <View style={styles.container}>
      {data.info.map(({color, value, name}) => {
        return (
          <InkListItem key={color} value={value} color={color} name={name} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 15,
    marginRight: 15,
  },
});

export default InkData;
