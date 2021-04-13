import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, TextInput, Button, Image } from 'react-native';


class Jeu extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
            mot: this.props.navigation.state.params.mot,
            dDisabled: false,
            eDisabled: false,
            fDisabled: false,
            gDisabled: false,
            hDisabled: false,
         };
       }
       disabledButton(btn) {
        this.setState({
            isButtonDisabled: true,
        });
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
               <Image style={styles.pendu_img} source={require("../img_pendu/hang0.png")}/>
               <Text style={[styles.titre]}>{myWord} {'\n\n'}</Text>
               <View  style={styles.clavier}>
               <Button onPress={() => this.setState({ disabled: true })} key={1} disabled={this.state.disabled} value="A" title="A"/>
                <Text> </Text>
               <Button onPress={() => this.setState({ disabled: true })} disabled={this.state.disabled} value="B" title="B"/>
               <Text> </Text>
               <Button onPress={() => this.setState({ disabled: true })} disabled={this.state.disabled} value="C" title="C"/>
               <Text> </Text>
               <Button onPress={() => this.setState({ dDisabled: true })} disabled={this.state.dDisabled} value="D" title="D"/>
               <Text> </Text>
               <Button onPress={() => this.setState({ eDisabled: true })} disabled={this.state.eDisabled} value="E" title="E"/>
               <Text> </Text>
               <Button onPress={() => this.setState({ fDisabled: true })} disabled={this.state.fDisabled} value="F" title="F"/>
               <Text> </Text>
               <Button onPress={() => this.setState({ gDisabled: true })} disabled={this.state.gDisabled} value="G" title="G"/>
               <Text> </Text>
               <Button onPress={() => this.setState({ hDisabled: true })} disabled={this.state.hDisabled} value="H" title="H"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="I" title="I"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="J" title="J"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="K" title="K"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="L" title="L"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="M" title="M"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="N" title="N"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="O" title="O"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="P" title="P"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="Q" title="Q"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="R" title="R"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="S" title="S"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="T" title="T"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="U" title="U"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="V" title="V"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="W" title="W"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="X" title="X"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="Y" title="Y"/>
               <Text> </Text>
               <Button onPress={() => this.disabledButton()} disabled={this.state.isButtonDisabled} value="Z" title="Z"/>
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
      padding: 10,
      position: "absolute",
      bottom: 10,
      marginVertical: 8,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent:'center',
    },
    titre: {
      flex: 1,
      top: 500,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: "center",
      color: 'white',
      },
    pendu_img: {
      opacity:0.8,
      borderRadius: 5,
      position: "absolute",
      top: 10,
      left: 30
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
