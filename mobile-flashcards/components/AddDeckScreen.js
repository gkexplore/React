import React, { Component } from 'react'
import { Text, View } from 'react-native'

class AddDeckScreen extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Text>Add Deck</Text>
            </View>
        )
    }
}

export default AddDeckScreen