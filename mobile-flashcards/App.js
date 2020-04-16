import React from 'react'
import { StyleSheet, View, Platform, StatusBar } from 'react-native'

import Constants from 'expo-constants'
import { Ionicons, FontAwesome } from "@expo/vector-icons"

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeTabs from './components/HomeTabs'

import { purple, white } from "./utils/colors"
import { createStackNavigator } from '@react-navigation/stack'
import DeckDetailsScreen from './components/DeckDetailsScreen'
import AddCardScreen from './components/AddCardScreen'
import StartQuizScreen from './components/StartQuizScreen'

const Tabs = Platform.OS === 'ios'
  ? createBottomTabNavigator()
  : createMaterialTopTabNavigator();

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppStatusBar backgroundColor={purple} barStyle='light-content' />
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='Decks' component={HomeTabs} options={{headerShown: false}}/>
              <Stack.Screen name='DeckDetailsScreen' component={DeckDetailsScreen}/>
              <Stack.Screen name='AddCardScreen' component={AddCardScreen}/>
              <Stack.Screen name='StartQuizScreen' component={StartQuizScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
