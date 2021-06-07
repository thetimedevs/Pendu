import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

class ChoixMot extends React.Component {

    constructor(props) {
      super(props)
      this.state = { word: '', joueur: this.props.navigation.state.params.joueur}
    }

    _play() {
      this.props.navigation.navigate('Jeu', { mot: this.state.word.toUpperCase(), joueur: this.state.joueur })
      this._setWord('')
    }

    _setWord(text) {
      if (!/[^a-zA-Z]/.test(text)) {
        this.setState({ word: text })
      }
    }

    render() {
      return (
        <View style={styles.container}>
          <ImageBackground source={require('../assets/fond_arbres.png')} style={styles.image} blurRadius={2}>
          <Text style={styles.titre}>Choisissez votre mot {"\n"}(entre 5 et 14 lettres)</Text>
          <TextInput style={styles.TextInput}
            placeholder='Choix du mot'
            value={this.state.word}
            onChangeText={(text) => this._setWord(text)}
            onSubmitEditing={() => this._play()}
            placeholderTextColor={'white'}
          />
        <Text> </Text>
        <TouchableOpacity
        onPress={() => this._play()}
        style={(this.state.word.length < 5 || this.state.word.length > 14)?{...styles.disabled}:styles.button}
        disabled={this.state.word.length < 5 || this.state.word.length > 14}>
        <Text style={styles.appButtonText}>Jouer</Text>
        </TouchableOpacity>
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
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    TextInput: {
        color: "#fff",
        backgroundColor: "#EB6A36",
        padding: 5
    },
    text: {
      color: "white"
    },  
    titre: {
        fontSize: 25,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        top: 70,
        left: 35,
        color: 'white',
      },
    button: {
      color: 'red',
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    disabled: {
      elevation: 8,
      backgroundColor: "#cccccc",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    image: {
        flex: 1,
        width: Dimensions.get('window').width,
        resizeMode: "contain",
        justifyContent: "center",
      },
    text: {
      alignItems: 'center',
      color: '#0800FF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

export default ChoixMot
