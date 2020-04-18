import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY, formatDecks } from './flashcards'

export function getDecks() {
    //AsyncStorage.removeItem(FLASHCARDS_STORAGE_KEY)
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then(formatDecks)
}

export function getDeck(id) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
        const data = JSON.parse(results)
        return data[id]
    })
}

export function saveDeckTitle(title) {
    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then(data => {
            let decks = JSON.parse(data)
            var newEntry = {}
            newEntry.title = title;
            newEntry.questions = [];
            decks[title] = newEntry
            AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))
        })
}

export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then(data => {
            let decks = JSON.parse(data)
            decks[title].questions.concat(card)
            AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))
        })

}

