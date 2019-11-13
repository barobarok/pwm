import React from 'react';
import {View, StyleSheet} from 'react-native';
import data from './data.json';
import InkListItem from './PaperDataItem/PaperDataItem';

const PaperData = () => {
  return (
    <View style={styles.container}>
      {data.info.map(({format, value, tray}) => {
        return (
          <InkListItem key={tray} value={value} format={format} tray={tray} />
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

export default PaperData;
