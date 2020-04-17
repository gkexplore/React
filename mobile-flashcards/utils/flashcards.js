import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'Udacity:flashcards'

function setDummyData(){
      
    let dummyData = {

        Java: {
          title: 'Java',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        },
        
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      }

    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(dummyData))

    console.data('stirage:', dummyData[0])
    return dummyData
}

export function formatDecks(results){
    return results === null ? setDummyData(): JSON.parse(results)
}