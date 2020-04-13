import { RECEIVE_QUESTIONS, UPDATE_QUESTION_ANSWER, ADD_QUESTION } from './types'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function updateQuestionAnswer({ authedUser, qid, answer }) {
    return {
        type: UPDATE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}


export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}


