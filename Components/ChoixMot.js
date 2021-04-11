import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class ChoixMot extends React.Component {

    constructor(props) {
        super(props)
        this.state = { word: '' }
    }

    _play() {
        this.props.navigation.navigate('Jeu', { mot: this.state.word })
    }

    _setWord(text) {
        if (!/[^a-zA-Z]/.test(text)) {
            console.log(this.state.word.length)
            this.setState({ word: text.toString().toUpperCase() })
        } else {
            console.log('erreur')
        }
    }

    render() {
        return (
            <View>
                <Text>Choisissez le mot à trouver (entre 5 et 14 lettres)</Text>
                <TextInput
                    placeholder='Choix du mot'
                    value={this.state.word}
                    onChangeText={(text) => this._setWord(text)}
                    onSubmitEditing={() => this._play()}
                />
                <Button
                    title='Jouer'
                    onPress={() => this._play()}
                    disabled={this.state.word.length < 5 || this.state.word.length > 14}
                />
            </View>
        );
    }
}

export default ChoixMot
