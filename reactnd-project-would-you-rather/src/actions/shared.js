import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, addUserAnswer, addUserQuestion } from '../actions/users'
import { receiveQuestions, updateQuestionAnswer, addQuestion } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function handleQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestionAnswer(info)
            .then(() => {
                dispatch(updateQuestionAnswer(info))
                dispatch(addUserAnswer(info))
                dispatch(hideLoading())
            })
            .catch((e) => {
                console.warn('Error in handleQuestionAnswer: ', e)
                alert('There was an error saving your answer. Try again.')
            })
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion(question)
            .then((question) => {
                console.log(question)
                dispatch(addQuestion(question))
                dispatch(addUserQuestion(question))
            })
            .then(() => dispatch(hideLoading()))
            .catch(() => {
                console.warn('There was an error occurred. Try again.')
                alert('There was an error occurred. Try again.')
            })
    }
}
