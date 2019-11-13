import React from 'react';
import {View, StyleSheet} from 'react-native';

const Widget = Component => {
  return props => (
    <View style={styles.container}>
      <Component
        {...props}
        textGrey={styles.textGrey}
        headerStyle={styles.header}
        textWhite={styles.textWhite}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    borderRadius: 20,
  },
  textGrey: {
    color: '#BCBCBC',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3,
  },
  textWhite: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3,
  },
  header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Widget;
