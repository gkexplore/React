import React from 'react'
import { StyleSheet, View, Platform, StatusBar } from 'react-native'

import Constants from 'expo-constants'

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { purple, white } from "./utils/colors"
import { setLocalNotification } from './utils/helpers'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import DeckDetailsScreen from './components/DeckDetailsScreen'
import AddCardScreen from './components/AddCardScreen'
import StartQuizScreen from './components/StartQuizScreen'
import HomeTabs from './components/HomeTabs'

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

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor={purple} barStyle='light-content' />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Decks' component={HomeTabs} options={{ headerShown: false }} />
              <Stack.Screen name='DeckDetailsScreen' component={DeckDetailsScreen} options={
                ({ route }) => {
                  const { deckId } = route.params
                  return {
                    title: `${deckId}`
                  }
                }
              } />
              <Stack.Screen name='AddCardScreen' component={AddCardScreen} options={{ title: 'Add Card' }} />
              <Stack.Screen name='StartQuizScreen' component={StartQuizScreen} options={{ title: 'Start Quiz' }} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
