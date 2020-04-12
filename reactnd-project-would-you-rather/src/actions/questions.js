export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UPDATE_QUESTION_ANSWER = 'UPDATE_QUESTION_ANSWER'

export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function updateQuestionAnswer({authedUser, qid, answer}){
    return {
        type: UPDATE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}