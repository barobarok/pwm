import React from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import Widget from '../../global/components/Widget/Widget';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AlertPanel = ({alertMsg, alertCode, textWhite, openModal}) => {
  console.log(['openModal', openModal]);
  return (
    <>
      <View style={styles.container}>
        <FontAwesome5 name="exclamation-triangle" size={45} color="#F0DC00" />
        <Text style={[textWhite, {marginLeft: 30}]}>
          {alertMsg} - {alertCode}
        </Text>
      </View>
      <Button title="Send report" onPress={openModal} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
});
export default Widget(AlertPanel);
