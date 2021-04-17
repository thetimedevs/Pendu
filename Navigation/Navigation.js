import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Menu from '../Components/Menu'
import Jeu from '../Components/Jeu'
import ChoixMot from "../Components/ChoixMot";
import EndGame from "../Components/InGame";

const MainStackNavigator = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: {
            headerShown: false
        },
    },
    EndGame: {
        screen: EndGame,
        navigationOptions: {
            headerShown: false,
        },
    },
    Jeu: {
        screen: Jeu,
        navigationOptions: {
            headerShown: false,
        },
    },
    ChoixMot: {
        screen: ChoixMot,
        navigationOptions: {
            headerShown: false
        },
    },
})

export default createAppContainer(MainStackNavigator)
