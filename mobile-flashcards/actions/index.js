import { RECEIVE_DECKS, ADD_DECK_TITLE, ADD_NEW_CARD } from './types'

export function receiveDecks(decks){
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addDeckTitle(newEntry){
    return {
        type: ADD_DECK_TITLE,
        newEntry
    }
}

export function addNewCard(title, card){
    return {
        type: ADD_NEW_CARD,
        title,
        card
    }
}
