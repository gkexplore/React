import { RECEIVE_DECKS, ADD_DECK_TITLE, ADD_NEW_CARD } from '../actions/types'

function decks(state={}, action){
    switch(action.type){
        case RECEIVE_DECKS :
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK_TITLE :
            console.log('titile reducer', action.newEntry)
            return {
                ...state,
                [action.newEntry.title]: action.newEntry
            }
        case ADD_NEW_CARD :
            console.log('add new card title', action.title)
            console.log('add new card', action.card)
            console.log('sd', state);
            console.log('s', state[action.title])
            
            return{
                ...state,
                [action.title]:{
                    ...state[action.title],
                    questions: state[action.title].questions.concat([action.card])
                }     
            }
        default :
            return state
    }
}

export default decks