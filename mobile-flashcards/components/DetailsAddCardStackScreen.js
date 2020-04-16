import React from 'react'
import DeckDetailsScreen from "./DeckDetailsScreen"
import AddCardScreen from './AddCardScreen'

import { purple, white } from "./utils/colors"

const DetailsAddCardStack = createStackNavigator();

const DetailsAddCardStackScreen = () => {
    return (
     <DetailsAddCardStack.Navigator>
        <DecksStack.Screen name='DeckDetails' component={DeckDetailsScreen} />
        <DecksStack.Screen name='AddCad' component={AddCardScreen} />
     </DetailsAddCardStack.Navigator>
    )
}

export default DetailsAddCardStackScreen