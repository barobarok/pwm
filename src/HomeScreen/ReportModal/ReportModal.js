import React, {Component} from 'react';
import {Modal, Text, Button, View, Alert, StyleSheet} from 'react-native';

class ReportModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {alertMsg, alertCode, properties, date} = this.props;
    const printerName = properties.find(elem => elem.key === 'Printer name');
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.back} />
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.text}>
              {printerName.key} - {printerName.value}
            </Text>
            <Text style={styles.text}>
              {date} - {alertMsg} - {alertCode}
            </Text>

            <View style={styles.btnsContainer}>
              <Button
                title="Send"
                color={'#00C017'}
                onPress={() => {
                  Alert.alert('Report has been sent.');
                  this.setModalVisible(!this.state.modalVisible);
                }}
              />
              <Button
                title="Cancel"
                color={'#ED0027'}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    backgroundColor: '#333333',
    opacity: 0.5,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  content: {
    backgroundColor: '#212121',
    display: 'flex',
    justifyContent: 'center',

    padding: 30,
    zIndex: 100,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  btnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 3,
  },
});
export default ReportModal;
