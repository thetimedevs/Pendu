import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './Page/Menu';

export default function App() {
  return (
    <View style={[styles.container]}>
        <Menu/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
