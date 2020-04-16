import React, { Component } from 'react'
import { Text, View } from 'react-native'

class DecksScreen extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Text onPress={() => {this.props.navigation.navigate('DeckDetailsScreen')}}>Decks</Text>
            </View>
        )
    }
}

export default DecksScreen