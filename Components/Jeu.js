import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Jeu extends React.Component {
    render() {
        console.log(this.props.navigation.state.params.mot)
        let mot  = this.props.navigation.state.params.mot
        return (
            <View>
                <Text>Le mot à trouver est { mot }</Text>
            </View>
            );
        }
}

export default Jeu
