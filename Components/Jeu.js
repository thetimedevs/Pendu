import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, TextInput } from 'react-native';


class Jeu extends React.Component {

    _Menu() {
        console.log("Menu")
    this.props.navigation.navigate('Menu')
      }

      constructor(props) {
        super(props);
        this.state = {
         value: this.props.navigation.state.params.mot 
         };
       }

    render() {
        console.log(this.props.navigation.state.params.mot)
        let mot  = this.props.navigation.state.params.mot
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/fond_maison.png')} style={styles.image} blurRadius={2}>
                <Text style={[styles.titre]}>Le mot à trouver est { mot } {"\n\n"} {this.state.value.length} lettres</Text>
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

export default Jeu
