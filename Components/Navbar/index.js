import * as React from 'react';
import { Appbar as NavBar} from 'react-native-paper';
import { StyleSheet } from 'react-native';


const NavigationBar = () => (
 <NavBar style={styles.top}>
    <NavBar.Action icon="menu" style={styles.item}/>
  </NavBar> 
 );

export default NavigationBar

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  item: {
      justifyContent: 'flex-end',
  }
});