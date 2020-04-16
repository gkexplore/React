import React, { Component } from 'react'
import { Text, View } from 'react-native'

class StartQuizScreen extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Text>Start Quiz</Text>
            </View>
        )
    }
}

export default StartQuizScreen