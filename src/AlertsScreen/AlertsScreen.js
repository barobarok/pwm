import React from 'react';
import {View, Text} from 'react-native';

import styles from '../global/styles/globalStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class AlertsScreen extends React.Component {
  static navigationOptions = {
    title: 'clipboard-list',
    tabBarIcon: ({focused}) => {
      return (
        <FontAwesome5
          name="exclamation-triangle"
          size={20}
          color={focused ? '#fff' : '#F0DC00'}
        />
      );
    },
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Text>Alert Panel</Text>
      </View>
    );
  }
}

export default AlertsScreen;
