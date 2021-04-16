import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, TextInput, Button, Image } from 'react-native';

class Jeu extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            place_letter: null,
            avancement: [],
            num: null,
            error: 0,
            mot: this.props.navigation.state.params.mot,
            disabledA: false,
            disabledB: false,
            disabledC: false,
            disabledD: false,
            disabledE: false,
            disabledF: false,
            disabledG: false,
            disabledH: false,
            disabledI: false,
            disabledJ: false,
            disabledK: false,
            disabledL: false,
            disabledM: false,
            disabledN: false,
            disabledO: false,
            disabledP: false,
            disabledQ: false,
            disabledR: false,
            disabledS: false,
            disabledT: false,
            disabledU: false,
            disabledV: false,
            disabledW: false,
            disabledX: false,
            disabledY: false,
            disabledZ: false,
        };
       }

    _test(value) {
        
        let toDisable = 'disabled' + value.toString()
        this.setState({[toDisable] : true })
        
        
        var str = this.props.navigation.state.params.mot
        var n = str.search(value);
        this.setState({place_letter: n})

        let newAvancement = this.state.avancement
        newAvancement.push(value)
        this.setState({avancement: newAvancement})

        this.setState({place_letter: n})
    }

    render() {
      console.log("place :", this.state.place_letter)
      console.log(this.state.avancement)
      console.log(this.state.error)
      if (Number.isInteger(this.state.num)) {
        this.num = <Text>True</Text>
      }
        let myWord = [];
        let myWord2 = [];
        if (this.state.error === 0) {
          this.pendu = <Image style={styles.pendu_img} source={require('../img_pendu/hang0.png')}/>
        } else if (this.state.error === 1) {
          this.pendu = <Image style={styles.pendu_img} source={require('../img_pendu/hang1.png')}/>
        } else if (this.state.error === 2) {
          this.pendu = <Image style={styles.pendu_img} source={require('../img_pendu/hang2.png')}/>
        } else if (this.state.error === 3) {
          this.pendu = <Image style={styles.pendu_img} source={require('../img_pendu/hang3.png')}/>
        } else if (this.state.error === 4) {
          this.pendu = <Image style={styles.pendu_img} source={require('../img_pendu/hang4.png')}/>
        } else if (this.state.error === 5) {
          this.pendu = <Image style={styles.pendu_img} source={require('../img_pendu/hang5.png')}/>
        } else if (this.state.error === 6) {
          this.pendu = <Image style={styles.pendu_img} source={require('../img_pendu/hang6.png')}/>
        } else if (this.state.error === 7) {
          this.pendu = <Image style={styles.pendu_img} source={require('../img_pendu/hang7.png')}/>
        }
        if (this.state.error === 7) {
          this.lost = <Text style={[styles.titre]}>Vous avez perdu !</Text>
        }

        /*if(this.state.place_letter === 0) {
          this.setState({error: this.state.error + 1})
        }*/

        if (this.state.place_letter === null) {
          this.test = <Text style={[styles.titre]}>{myWord}</Text>
      } else {
        this.test = <Text style={[styles.titre]}>{myWord2}</Text>
      }

        /*for (let i = 0; i < this.state.mot.length;i++) {
          myWord.push(
            
            <Text style={[styles.titre]} key={i}> {this.state.avancement[this.state.place_letter]} </Text>
            // <Text style={[styles.titre]} key={i}> _ </Text>
            //<Text style={[styles.titre]} key={i}> {this.state.mot[i]} </Text>
          );
        }*/
      if(this.state.place_letter !== null) {
        for (let o = 0; o < this.state.mot.length;o++) {
          myWord2.push(
            <Text style={[styles.titre]} key={this.state.place_letter}> {this.state.avancement[this.state.place_letter]} </Text>
          )
        }
      }else {
        for (let i = 0; i < this.state.mot.length;i++) {
          myWord.push(
          <Text style={[styles.titre]} key={i}> _ </Text>
          )
        }
      }

        return (
            <View style={styles.container}>
              <ImageBackground source={require('../assets/fond_maison.png')} style={styles.image} blurRadius={2}>
              {this.pendu}
              {this.lost}
              {this.win}
              {this.test}
               <View  style={styles.clavier}>
               <Button onPress={() => this._test('A')} disabled={this.state.disabledA} value="A" title="A"/>
               <Text> </Text>
               <Button onPress={() => this._test('B')} disabled={this.state.disabledB} value="B" title="B"/>
               <Text> </Text>
               <Button onPress={() => this._test('C')} disabled={this.state.disabledC} value="C" title="C"/>
               <Text> </Text>
               <Button onPress={() => this._test('D')} disabled={this.state.disabledD} value="D" title="D"/>
               <Text> </Text>
               <Button onPress={() => this._test('E')} disabled={this.state.disabledE} value="E" title="E"/>
               <Text> </Text>
               <Button onPress={() => this._test('F')} disabled={this.state.disabledF} value="F" title="F"/>
               <Text> </Text>
               <Button onPress={() => this._test('G')} disabled={this.state.disabledG} value="G" title="G"/>
               <Text> </Text>
               <Button onPress={() => this._test('H')} disabled={this.state.disabledH} value="H" title="H"/>
               <Text> </Text>
               <Button onPress={() => this._test('I')} disabled={this.state.disabledI} value="I" title="I"/>
               <Text> </Text>
               <Button onPress={() => this._test('J')} disabled={this.state.disabledJ} value="J" title="J"/>
               <Text> </Text>
               <Button onPress={() => this._test('K')} disabled={this.state.disabledK} value="K" title="K"/>
               <Text> </Text>
               <Button onPress={() => this._test('L')} disabled={this.state.disabledL} value="L" title="L"/>
               <Text> </Text>
               <Button onPress={() => this._test('M')} disabled={this.state.disabledM} value="M" title="M"/>
               <Text> </Text>
               <Button onPress={() => this._test('N')} disabled={this.state.disabledN} value="N" title="N"/>
               <Text> </Text>
               <Button onPress={() => this._test('O')} disabled={this.state.disabledO} value="O" title="O"/>
               <Text> </Text>
               <Button onPress={() => this._test('P')} disabled={this.state.disabledP} value="P" title="P"/>
               <Text> </Text>
               <Button onPress={() => this._test('Q')} disabled={this.state.disabledQ} value="Q" title="Q"/>
               <Text> </Text>
               <Button onPress={() => this._test('R')} disabled={this.state.disabledR} value="R" title="R"/>
               <Text> </Text>
               <Button onPress={() => this._test('S')} disabled={this.state.disabledS} value="S" title="S"/>
               <Text> </Text>
               <Button onPress={() => this._test('T')} disabled={this.state.disabledT} value="T" title="T"/>
               <Text> </Text>
               <Button onPress={() => this._test('U')} disabled={this.state.disabledU} value="U" title="U"/>
               <Text> </Text>
               <Button onPress={() => this._test('V')} disabled={this.state.disabledV}  value="V" title="V"/>
               <Text> </Text>
               <Button onPress={() => this._test('W')} disabled={this.state.disabledW} value="W" title="W"/>
               <Text> </Text>
               <Button onPress={() => this._test('X')} disabled={this.state.disabledX} value="X" title="X"/>
               <Text> </Text>
               <Button onPress={() => this._test('Y')} disabled={this.state.disabledY} value="Y" title="Y"/>
               <Text> </Text>
               <Button onPress={() => this._test('Z')} disabled={this.state.disabledZ} value="Z" title="Z"/>
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
