import * as React from 'react';
import { Appbar as NavBar} from 'react-native-paper';
import { StyleSheet } from 'react-native';

const NavigationBar = () => (
 <NavBar>
    <NavBar.Action icon="menu" style={styles.item}/>
    <NavBar.Action icon="information-variant" style={styles.info}/>
  </NavBar> 
 );

export default NavigationBar

const styles = StyleSheet.create({
  item: {
    order: 5,
    marginLeft: 'auto',
  },
  info: {
    order: 1,
  }
});