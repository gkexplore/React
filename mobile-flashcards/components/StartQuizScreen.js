import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import {
    clearLocalNotification,
    setLocalNotification
  } from '../utils/helpers'


class StartQuizScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentQuestion: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            showAnswer: false,
            showResult: false
        }
    }

    _handleAnswer(currentQuestion, answer, totalQuestions) {
        console.log('c',currentQuestion)
        console.log('t', this.props.totalQuestions)
        if(this.props.questions[currentQuestion].answer === answer){
            this.setState((currentState) => ({
                correctAnswers: currentState.correctAnswers + 1,
                currentQuestion: currentState.currentQuestion + 1,
                showResult: currentQuestion === (this.props.totalQuestions-1) ? true : false
            }))
        }else{
            this.setState((currentState) => ({
                wrongAnswers: currentState.wrongAnswers + 1,
                currentQuestion: currentState.currentQuestion + 1,
                showResult: currentQuestion === (this.props.totalQuestions-1) ? true : false
            }))
        }
        clearLocalNotification()
      .then(setLocalNotification)
    }

     _handleShowAnswer(){
        this.setState((currentState)=>({
            showAnswer: !currentState.showAnswer,
        }))
    }

    _handleTakeQuizAgain(){
        this.setState({
            currentQuestion: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            showAnswer: false,
            showResult: false
        })
    }

    render() {
        const { currentQuestion, showAnswer, showResult, correctAnswers, wrongAnswers } = this.state
        const { questions, noQuestions, totalQuestions } = this.props

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {noQuestions === true ?
                    <Text>Sorry, you cannot take a quiz because there are no card in the deck.</Text>
                    : (showResult === true ?
                        (<View>
                            <Text>Correct: {correctAnswers}</Text>
                            <Text>Wrong: {wrongAnswers}</Text>
                            <Button title='Take Quiz Again' onPress={()=>this._handleTakeQuizAgain()}></Button>
                        </View>
                        )
                        :
                        (showAnswer === true ?   
                            <View>
                                <Text>{questions[currentQuestion].answer}</Text>
                                <Text onPress={()=>this._handleShowAnswer()}>Question</Text>
                            </View>
                            :
                            <View>
                                <Text>{currentQuestion + 1}/{totalQuestions}</Text>
                                <Text>{questions[currentQuestion].question}</Text>
                                <Text onPress={()=>this._handleShowAnswer()}>Answer</Text>
                                <Button title='Correct' onPress={()=>this._handleAnswer(currentQuestion,'Yes')}></Button>
                                <Button title='InCorrect' onPress={()=>this._handleAnswer(currentQuestion, 'No')}></Button>
                            </View>
                        )
                    )

                }

            </View>
        )
    }
}

function mapStateToProps(decks, { route }) {
    const { deckId } = route.params
    console.log('deckId', deckId)
    const deck = decks[deckId]
    console.log('deck', deck)
    const noQuestions = (deck.questions && deck.questions.length === 0) ? true : false
    const totalQuestions = deck.questions.length
    console.log('totalQuestions', totalQuestions)
    return {
        questions: deck.questions,
        deckId,
        noQuestions,
        totalQuestions
    }
}

export default connect(mapStateToProps)(StartQuizScreen)