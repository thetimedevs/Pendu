import { createStackNavigator, createAppContainer } from 'react-navigation-stack'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './Components/Menu';

export default class App extends React.Component{
  render() {
    return (
        <View style={[styles.container]}>
          <Menu/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
