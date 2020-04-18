import React from 'react'
import { StyleSheet, View, Platform, StatusBar } from 'react-native'

import { Ionicons, FontAwesome } from "@expo/vector-icons"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import AddDeckScreen from './AddDeckScreen'

import { purple, white } from "../utils/colors"

import DecksScreen from './DecksScreen'

const Tab = Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Decks"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let icon;
                    if (route.name === "Add Deck") {
                        icon = (
                            <FontAwesome name="plus-square" size={size} color={color} />
                        );
                    } else if (route.name === "Decks") {
                        icon = (
                            <Ionicons name="ios-bookmarks" size={size} color={color} />
                        );
                    }
                    return icon;
                }
            })}
            tabBarOptions={{
                activeTintColor: Platform.OS === "ios" ? purple : white,
                style: {
                    height: 80,
                    backgroundColor: Platform.OS === "ios" ? white : purple,
                    shadowColor: "rgba(0, 0, 0, 0.24)",
                    shadowOffset: {
                        width: 0,
                        height: 3
                    },
                    shadowRadius: 6,
                    shadowOpacity: 1
                }
            }}
        >
            <Tab.Screen name='Decks' component={DecksScreen} />
            <Tab.Screen name='Add Deck' component={AddDeckScreen} />
        </Tab.Navigator>
    )
}

export default HomeTabs