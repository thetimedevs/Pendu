import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';

class ChoixMot extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                 <ImageBackground source={require('../assets/fond.png')} style={styles.image} blurRadius={2}>
                <Text style={[styles.titre]}>Choix mot 2 Joueurs</Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
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
        top: 40,
        left: 0,
        color: 'white',
      },
    image: {
        flex: 1,
        width: Dimensions.get('window').width,
        resizeMode: "contain",
        justifyContent: "center",
      },
    text: {
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

export default ChoixMot
