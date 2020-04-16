import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { purple, white } from "../utils/colors"

class DeckDetailsScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text onPress={() => {this.props.navigation.navigate('AddCardScreen')}}>Add Card</Text>
                <Text onPress={() => {this.props.navigation.navigate('StartQuizScreen')}}>Start Quiz</Text>
            </View>
        )
    }
}

export default DeckDetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white,
      padding: 10
    }
  });