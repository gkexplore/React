import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { purple, white, red } from "../utils/colors"
import { connect } from 'react-redux'

class DeckDetailsScreen extends Component {
    render() {
        const { deckId, deck, decks } = this.props
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title='Add Card' onPress={() => { this.props.navigation.navigate('AddCardScreen', { deckId: deckId }) }} />
                <Button title='Start Quiz' onPress={() => { this.props.navigation.navigate('StartQuizScreen', { deckId: deckId }) }} />
            </View>
        )
    }
}

function mapStateToProps(decks, { route }) {
    const { deckId } = route.params
    return {
        decks,
        deckId,
        deck: decks[deckId]
    }
}

export default connect(mapStateToProps)(DeckDetailsScreen)

const styles = StyleSheet.create({

});