import React from 'react';
import {View, Text} from 'react-native';

import styles from '../globalStyles/globalStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'clipboard-list',
    tabBarIcon: (
      <FontAwesome5 name="clipboard-list" size={25} color="#888888" />
    ),
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Text>Profile Screen Screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
