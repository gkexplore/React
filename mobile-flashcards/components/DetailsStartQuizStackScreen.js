import React from 'react'
import DeckDetailsScreen from "./DeckDetailsScreen"
import StartQuizScreen from './StartQuizScreen'

import { purple, white } from "./utils/colors"

const DetailsStartQuizStack = createStackNavigator();

const DetailsStartQuizStackScreen = () => {
    return (
     <DetailsStartQuizStack.Navigator>
        <DetailsStartQuizStack.Screen name='DeckDetails' component={DeckDetailsScreen} />
        <DetailsStartQuizStack.Screen name='StartQuiz' component={StartQuizScreen} />
     </DetailsStartQuizStack.Navigator>
    )
}

export default DetailsStartQuizStackScreen