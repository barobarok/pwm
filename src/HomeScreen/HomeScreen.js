import React from 'react';
import {ScrollView} from 'react-native';
import styles from '../global/styles/globalStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WidgetPanel from '../global/components/WidgetPanel/WidgetPanel';
import Resources from './Resources/Resources';
import AlertPanel from '../AlertsScreen/AlertPanel/AlertPanel';
import ReportModal from './ReportModal/ReportModal';
import properties from './properties.json';
import driver from './driver.json';
import alertsList from '../AlertsScreen/alerts.json';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this._modal = React.createRef();
  }
  static navigationOptions = {
    title: 'Welcome',
    tabBarIcon: ({focused}) => {
      return (
        <FontAwesome5
          name="home"
          size={20}
          color={focused ? '#fff' : '#888888'}
        />
      );
    },
  };

  openModal = () => {
    this._modal.current.setModalVisible(true);
  };

  render() {
    console.log();
    const {alerts} = alertsList;
    const lastIndex = alerts.length - 1;
    return (
      <>
        <ReportModal
          ref={this._modal}
          alertMsg={alerts[lastIndex].msg}
          alertCode={alerts[lastIndex].code}
          date={alerts[lastIndex].date}
          properties={properties.info}
        />
        <ScrollView style={styles.mainView}>
          {alerts.length > 0 ? (
            <AlertPanel
              alertMsg={alerts[lastIndex].msg}
              alertCode={alerts[lastIndex].code}
              date={alerts[lastIndex].date}
              openModal={this.openModal}
            />
          ) : null}
          <Resources />
          <WidgetPanel header={'Printer properties'} data={properties.info} />
          <WidgetPanel header={'Print driver properties'} data={driver.info} />
        </ScrollView>
      </>
    );
  }
}

export default HomeScreen;
