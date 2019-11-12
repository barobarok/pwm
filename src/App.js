import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import {createAppContainer} from 'react-navigation';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import HomeScreen from './HomeScreen/HomeScreen';

const MainNavigator = createMaterialBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
  },
  {
    initialRouteName: 'Home',
    barStyle: {backgroundColor: '#383838'},
    labeled: false,
    activeColor: '#23A4FF',
  },
);
const Nav = createAppContainer(MainNavigator);
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <Nav />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainView: {
    backgroundColor: '#212121',
    flex: 1,
  },
});

export default App;
