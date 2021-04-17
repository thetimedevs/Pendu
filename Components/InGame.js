import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions,  TouchableOpacity } from 'react-native';

class InGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.navigation.state.params.status,
            mot: this.props.navigation.state.params.mot,
        };
    }

  _rej() {
    console.log('1P')
    this.props.navigation.navigate('Jeu', { mot: 'JEUX' })
  }

  _quit() {
    console.log("2P")
    this.props.navigation.navigate('Menu')
  }

  render() {
      if(this.state.status === "GAGNEZ"){
          this.msg = 'BRAVO'
      } else if(this.state.status === "PERDU") {
        this.msg = 'DOMMAGE'
      }
   return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/fond.png')} style={styles.image} blurRadius={2}>
        <Text style={[styles.titre, styles.titre]}>Jeu du pendu !{'\n\n'}{this.msg} !!</Text>

    {/* Button 1 Joueur */}
    <Text style={[styles.text]}>Vous avez {this.state.status} la patie !!</Text>

    <Text style={[styles.text]}>Le mot était : {this.state.mot}</Text>

    {/* Button Option */}
      <View style={styles.view_button}>
    <TouchableOpacity onPress={() => this._rej()} disabled={false} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Rejouer</Text>
    </TouchableOpacity>
    <Text> </Text>
    <TouchableOpacity onPress={() => this._quit()} style={styles.appButtonContainer_option}>
      <Text style={styles.appButtonText}>Menu</Text>
    </TouchableOpacity>
        </View>
        <StatusBar backgroundColor='orange' barStyle='light-content'/>
        </ImageBackground>
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
  view_button: {
    padding: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:'center',
  },
  titre: {
    fontSize: 25,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    top: 70,
    left: 90,
    color: 'white',
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20
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
  appButtonContainer_option: {
    elevation: 8,
    backgroundColor: "#CA2856",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

export default InGame
