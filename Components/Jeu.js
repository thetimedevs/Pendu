import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Button, Image } from 'react-native';

class Jeu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundLetters: 0,
            usedLetters: [],
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
            disabledZ: false
        }
    }

    _input(value) {
        {/* Récupération des données du state */}
        let mot = this.state.mot
        let error = this.state.error
        let foundLetters = this.state.foundLetters
        let toDisable = 'disabled' + value.toString()
        let usedLetters = this.state.usedLetters
        usedLetters.push(value)

        {/* Si le mot contiend la valeur, on verifie pour chaque lettre du mot si la valeur est présente
         Pour chaque présence on imcrémente foundLetters
         Sinon, on incrémente error*/}
        if(mot.split('').includes(value)){
          mot.split('').map((letter, index) => {
            if (letter === value) {
              foundLetters++
            }
          })
        } else {
          error++
        }
        {/* Navigations Reussite / Echec */}
        if(error === 7) {
            console.log('Perdu, on efface le state')
            let mot = this.state.mot
            this.setState({
                foundLetters: 0,
                usedLetters: [],
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
                disabledZ: false
            })
          this.props.navigation.navigate('EndGame', { mot: mot, status: "PERDU" })
        }
        if(foundLetters === mot.length){
            console.log('Gagné, on efface le state')
            let mot = this.state.mot
            this.setState({
                foundLetters: 0,
                usedLetters: [],
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
                disabledZ: false
            })
            this.props.navigation.navigate('EndGame', { mot: mot, status: "GAGNE" })
        } else {
            console.log('Ni gagné ni perdu, on met à jour le state')
            {/* On set le State d'un coup avec totues les valeurs modifiées si le jeu n'est pas gagné/perdu */
            }
            this.setState({
                [toDisable]: true,
                mot: mot,
                error: error,
                foundLetters: foundLetters,
                usedLetters: usedLetters
            })
        }
    }

    render() {
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

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/fond_maison.png')} style={styles.image} blurRadius={2}>
                {this.pendu}
                {this.renderWord()}
                <View  style={styles.clavier}>
               <Button onPress={() => this._input('A')} disabled={this.state.disabledA} value="A" title="A"/>
               <Text> </Text>
               <Button onPress={() => this._input('B')} disabled={this.state.disabledB} value="B" title="B"/>
               <Text> </Text>
               <Button onPress={() => this._input('C')} disabled={this.state.disabledC} value="C" title="C"/>
               <Text> </Text>
               <Button onPress={() => this._input('D')} disabled={this.state.disabledD} value="D" title="D"/>
               <Text> </Text>
               <Button onPress={() => this._input('E')} disabled={this.state.disabledE} value="E" title="E"/>
               <Text> </Text>
               <Button onPress={() => this._input('F')} disabled={this.state.disabledF} value="F" title="F"/>
               <Text> </Text>
               <Button onPress={() => this._input('G')} disabled={this.state.disabledG} value="G" title="G"/>
               <Text> </Text>
               <Button onPress={() => this._input('H')} disabled={this.state.disabledH} value="H" title="H"/>
               <Text> </Text>
               <Button onPress={() => this._input('I')} disabled={this.state.disabledI} value="I" title="I"/>
               <Text> </Text>
               <Button onPress={() => this._input('J')} disabled={this.state.disabledJ} value="J" title="J"/>
               <Text> </Text>
               <Button onPress={() => this._input('K')} disabled={this.state.disabledK} value="K" title="K"/>
               <Text> </Text>
               <Button onPress={() => this._input('L')} disabled={this.state.disabledL} value="L" title="L"/>
               <Text> </Text>
               <Button onPress={() => this._input('M')} disabled={this.state.disabledM} value="M" title="M"/>
               <Text> </Text>
               <Button onPress={() => this._input('N')} disabled={this.state.disabledN} value="N" title="N"/>
               <Text> </Text>
               <Button onPress={() => this._input('O')} disabled={this.state.disabledO} value="O" title="O"/>
               <Text> </Text>
               <Button onPress={() => this._input('P')} disabled={this.state.disabledP} value="P" title="P"/>
               <Text> </Text>
               <Button onPress={() => this._input('Q')} disabled={this.state.disabledQ} value="Q" title="Q"/>
               <Text> </Text>
               <Button onPress={() => this._input('R')} disabled={this.state.disabledR} value="R" title="R"/>
               <Text> </Text>
               <Button onPress={() => this._input('S')} disabled={this.state.disabledS} value="S" title="S"/>
               <Text> </Text>
               <Button onPress={() => this._input('T')} disabled={this.state.disabledT} value="T" title="T"/>
               <Text> </Text>
               <Button onPress={() => this._input('U')} disabled={this.state.disabledU} value="U" title="U"/>
               <Text> </Text>
               <Button onPress={() => this._input('V')} disabled={this.state.disabledV}  value="V" title="V"/>
               <Text> </Text>
               <Button onPress={() => this._input('W')} disabled={this.state.disabledW} value="W" title="W"/>
               <Text> </Text>
               <Button onPress={() => this._input('X')} disabled={this.state.disabledX} value="X" title="X"/>
               <Text> </Text>
               <Button onPress={() => this._input('Y')} disabled={this.state.disabledY} value="Y" title="Y"/>
               <Text> </Text>
               <Button onPress={() => this._input('Z')} disabled={this.state.disabledZ} value="Z" title="Z"/>
               </View>
                </ImageBackground>
            </View>
        );
    }

    renderWord(){
        return(
            <View style={styles.word}>
                {this.state.mot.split('').map((letter,index)=>{
                    if(!this.state.usedLetters.includes(letter)){
                        return (<View style={styles.wordContainer} key={index}><Text style={[styles.wordItem, styles.titre]}>_</Text></View>)
                    }else{
                        return(<View style={styles.wordContainer} key={index}><Text style={[styles.wordItem, styles.titre]}>{letter}</Text></View>)
                    }
                })}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    wordContainer: {
        flex:0,
        padding:5,
        margin:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: "wrap",
    },
    wordItem: {
        width:20,
        fontSize:20,
        flexWrap: "wrap",
        borderBottomWidth:1,
        borderBottomColor:"black"
    },
    word: {
        flex: 1,
        flexDirection:"row",
        alignItems: 'center',
        alignSelf:"auto",
        justifyContent: 'center',
        flexWrap:"wrap"
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
      borderRadius: 5,
      position: "absolute",
      top: 10,
      left: 30,
      tintColor: 'white'
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
