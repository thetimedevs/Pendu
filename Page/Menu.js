import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Button, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/fond.png')} style={styles.image} blurRadius={2}>
        <Text style={[styles.titre, styles.titre]}>Jeux du pendu !</Text>  

  {/* Button 1 Joueur */}
  <TouchableOpacity style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>1 Joueur</Text>
  </TouchableOpacity>

  {/* Button 2 Joueurs */}
    <Text>{'\n'}</Text>
  <TouchableOpacity style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>2 Joueurs</Text>
  </TouchableOpacity>

  {/* Button Option */}
    <Text>{'\n\n\n'}</Text>
  <TouchableOpacity style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>Option</Text>
  </TouchableOpacity>

      <StatusBar backgroundColor="orange" barStyle="light-content"/>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titre: {
    fontSize: 25,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    top: 70,
    left: 80,
    color: 'white',
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: "contain",
    justifyContent: "center",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});