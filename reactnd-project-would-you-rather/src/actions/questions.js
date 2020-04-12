export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UPDATE_QUESTION_ANSWER = 'UPDATE_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

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


