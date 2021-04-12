import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, TextInput, Button } from 'react-native';


class Jeu extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
         value: this.props.navigation.state.params.mot 
         };
       }
      
    render() { 
        console.log(this.props.navigation.state.params.mot)
        let mot = this.props.navigation.state.params.mot
        
        var myloop = [];
        let nb = this.state.value.length
for (let i = 0; i < nb; i++) {
  myloop.push(
    <Text style={[styles.titre]}> _ </Text>
  );
}
        
        return (
            <View style={styles.container}>
                 <ImageBackground source={require('../assets/fond_maison.png')} style={styles.image} blurRadius={2}>
               <Text style={[styles.titre]}>Le mot à trouver est {"\n\n"} {nb} lettres {'\n\n\n\n'}{myloop} {'\n\n'}</Text>
               <View style={styles.clavier}>
               <Button title="A"/>
                <Text> </Text>
               <Button title="B"/>
               <Text> </Text>
               <Button title="C"/>
               <Text> </Text>
               <Button title="D"/>
               <Text> </Text>
               <Button title="E"/>
               <Text> </Text>
               <Button title="F"/>
               <Text> </Text>
               <Button title="G"/>
               <Text> </Text>
               <Button title="H"/>
               <Text> </Text>
               <Button title="I"/>
               <Text> </Text>
               <Button title="J"/>
               <Text> </Text>
               <Button title="K"/>
               <Text> </Text>
               <Button title="L"/>
               <Text> </Text>
               <Button title="M"/>
               <Text> </Text>
               <Button title="N"/>
               <Text> </Text>
               <Button title="O"/>
               <Text> </Text>
               <Button title="P"/>
               <Text> </Text>
               <Button title="Q"/>
               <Text> </Text>
               <Button title="R"/>
               <Text> </Text>
               <Button title="S"/>
               <Text> </Text>
               <Button title="T"/>
               <Text> </Text>
               <Button title="U"/>
               <Text> </Text>
               <Button title="V"/>
               <Text> </Text>
               <Button title="W"/>
               <Text> </Text>
               <Button title="X"/>
               <Text> </Text>
               <Button title="Y"/>
               <Text> </Text>
               <Button title="Z"/>
               </View>
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
    clavier:{
      flex: 1,
      padding: 10,
      position: "absolute",
      bottom: 10,
      marginVertical: 8,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems:'center',
    justifyContent:'center',
    },  
    titre: {
        fontSize: 25,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        top: 70,
        left: 40,
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

export default Jeu;
