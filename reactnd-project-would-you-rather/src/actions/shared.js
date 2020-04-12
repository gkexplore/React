import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, addUserAnswer } from '../actions/users'
import { receiveQuestions, updateQuestionAnswer } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData(){
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

export function handleQuestionAnswer(info){
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestionAnswer(info)
        .then(()=>{
            dispatch(updateQuestionAnswer(info))
            dispatch(addUserAnswer(info))
            dispatch(hideLoading())
        })
        .catch((e)=>{
            console.warn('Error in handleQuestionAnswer: ', e)
            alert('There was an error saving your answer. Try again.')
        })
    }
}
