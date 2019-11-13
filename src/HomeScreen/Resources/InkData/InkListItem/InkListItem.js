import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const InkListItem = ({value, color, name}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, {backgroundColor: color, width: value}]} />
      <View style={{width: '100%'}}>
        <Text style={styles.text}>{value}</Text>
        <Text style={styles.label}>{name}</Text>
      </View>
    </View>
  );
};
const width = Dimensions.get('window').width / 4;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderRadius: 20,
    height: width - 10,
    width: width,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    width: '100%',
    color: '#fff',
  },
  line: {
    height: 3,
  },
  label: {
    textAlign: 'center',

    fontSize: 12,
    width: '100%',
    color: '#fff',
  },
});

export default InkListItem;
