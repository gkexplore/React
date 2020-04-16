import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DeckDetailsScreen from "./DeckDetailsScreen"
import DecksScreen from './DecksScreen'

import { purple, white } from "../utils/colors"

const DecksStack = createStackNavigator()

const DecksStackScreen = () => {
    return (
     <DecksStack.Navigator>
        <DecksStack.Screen name='DecksScreen'  component={DecksScreen} />
        <DecksStack.Screen name='DeckDetailsScreen'  component={DeckDetailsScreen} />
     </DecksStack.Navigator>
    )
} 

export default DecksStackScreen