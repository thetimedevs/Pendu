import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, TextInput, Button } from 'react-native';


class Jeu extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
         mot: this.props.navigation.state.params.mot
         };
       }

    render() {
        let myWord = [];
        let nb = this.state.mot.length
for (let i = 0; i < nb; i++) {
  myWord.push(
    <Text style={[styles.titre]} key={i}> _ </Text>
  );
}

        return (
            <View style={styles.container}>
                 <ImageBackground source={require('../assets/fond_maison.png')} style={styles.image} blurRadius={2}>
               <Text style={[styles.titre]}>Le mot à trouver est {"\n\n"} {nb} lettres {'\n\n\n\n'}{myWord} {'\n\n'}</Text>
               <View  style={styles.clavier}>
               <Button value="A" title="A"/>
                <Text> </Text>
               <Button value="B" title="B"/>
               <Text> </Text>
               <Button value="C" title="C"/>
               <Text> </Text>
               <Button value="D" title="D"/>
               <Text> </Text>
               <Button value="E" title="E"/>
               <Text> </Text>
               <Button value="F" title="F"/>
               <Text> </Text>
               <Button value="G" title="G"/>
               <Text> </Text>
               <Button value="H" title="H"/>
               <Text> </Text>
               <Button value="I" title="I"/>
               <Text> </Text>
               <Button value="J" title="J"/>
               <Text> </Text>
               <Button value="K" title="K"/>
               <Text> </Text>
               <Button value="L" title="L"/>
               <Text> </Text>
               <Button value="M" title="M"/>
               <Text> </Text>
               <Button value="N" title="N"/>
               <Text> </Text>
               <Button value="O" title="O"/>
               <Text> </Text>
               <Button value="P" title="P"/>
               <Text> </Text>
               <Button value="Q" title="Q"/>
               <Text> </Text>
               <Button value="R" title="R"/>
               <Text> </Text>
               <Button value="S" title="S"/>
               <Text> </Text>
               <Button value="T" title="T"/>
               <Text> </Text>
               <Button value="U" title="U"/>
               <Text> </Text>
               <Button value="V" title="V"/>
               <Text> </Text>
               <Button value="W" title="W"/>
               <Text> </Text>
               <Button value="X" title="X"/>
               <Text> </Text>
               <Button value="Y" title="Y"/>
               <Text> </Text>
               <Button value="Z" title="Z"/>
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
      flex: 1,
      top: 60,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: "center",
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
