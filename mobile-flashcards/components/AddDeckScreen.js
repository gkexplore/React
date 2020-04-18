import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { TabActions } from '@react-navigation/native'
import { connect } from 'react-redux'
import decks from '../reducers'
import { addDeckTitle } from '../actions'
import { saveDeckTitle } from '../utils/api'


class AddDeckScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deckname: ''
        }
    }

    _handlePress() {
        console.log(this.state.deckname);
        var newEntry = {}
        newEntry.title = this.state.deckname;
        newEntry.questions = [];
        this.props.dispatch(addDeckTitle(newEntry))
        saveDeckTitle(this.state.deckname)
        const jumpToAction = TabActions.jumpTo('Decks');
        this.props.navigation.dispatch(jumpToAction);

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>What is the title of your new deck></Text>
                <TextInput editable placeholder='Deck Title'
                    style={{ height: 40, width: 80, borderColor: 'gray', borderWidth: 1 }}
                    returnKeyLabel={"next"}
                    onChangeText={(text) => this.setState({ deckname: text })} />
                <Button title='Create Deck'
                    onPress={() => this._handlePress()}
                />
            </View>
        )
    }
}

function mapDispatchToProps(dispatch, { navigation }) {
    return {
        dispatch,
    }
}

export default connect(mapDispatchToProps)(AddDeckScreen)