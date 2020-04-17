import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addNewCard } from '../actions'
import { addCardToDeck } from '../utils/api'

class AddCardScreen extends Component{

    constructor(props){
        super(props)
        this.state = {
            question:'',
            answer:''
        }
    }

    _handleAddCard(){
        console.log('Question:', this.state.question)
        console.log('Answer:', this.state.answer)
        var newEntry = {}
        newEntry.question = this.state.question
        newEntry.answer = this.state.answer

        this.props.dispatch(addNewCard(this.props.deckId, newEntry))
        addCardToDeck(this.props.deckId, newEntry)
        this.props.navigation.goBack()
    }

    render(){
        const { deckId } = this.props
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <TextInput editable placeholder='Question'
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text)=>this.setState({question:text})}/>
                <TextInput editable placeholder='Answer'
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({answer:text})}/>
                <Button title='Submit' onPress={()=>this._handleAddCard()}></Button>
            </View>
        )
    }
}

function mapStateToProps(decks, { route }){
    const { deckId } = route.params
    return {
        decks,
        deckId,
        deck: decks[deckId]
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardScreen)

