import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, ImageBackground } from 'react-native';

class ChoixMot extends React.Component {

    constructor(props) {
      super(props)
      this.state = { word: '' }
    }

    _play() {
      this.props.navigation.navigate('Jeu', { mot: this.state.word.toUpperCase() })
    }

    _setWord(text) {
      if (!/[^a-zA-Z]/.test(text)) {
        this.setState({ word: text })
      }
    }

    render() {
      return (
        <View style={styles.container}>
          <ImageBackground source={require('../assets/fond_maison.png')} style={styles.image} blurRadius={2}>
          <Text>Choisissez le mot à trouver (entre 5 et 14 lettres)</Text>
          <TextInput style={styles.TextInput}
            placeholder='Choix du mot'
            value={this.state.word}
            onChangeText={(text) => this._setWord(text)}
            onSubmitEditing={() => this._play()}
          />
          <Button
            title='Jouer'
            onPress={() => this._play()}
            disabled={this.state.word.length < 5 || this.state.word.length > 14}
          /></ImageBackground>
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
    TextInput: {
        color: "#fff",
    },
    titre: {
        fontSize: 25,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        top: 70,
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
