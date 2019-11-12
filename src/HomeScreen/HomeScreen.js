import React from 'react';
import {View, Text} from 'react-native';
import styles from '../globalStyles/globalStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    tabBarIcon: <FontAwesome5 name="home" size={25} color="#888888" />,
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
