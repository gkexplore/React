import React, {Component} from 'react'
import { connect } from 'react-redux'

class Score extends Component{
    render(){
        const { 
            answersCount,
            questionsCount,
            score,
            name,
            avatarURL } = this.props

        return(
            <div>
            <span>{name} asks</span>
            <img src={avatarURL}
                alt={`Avatar of ${name}`}
                className='avatar'
            />
            <div>
                <div>
                    <span>Answered Questions {answersCount}</span>
                </div>
                <div>
                    <span>Created Questions {questionsCount}</span>
                </div>
            </div>
            <div>
                <p>Score</p>
                <p>{score}</p>
            </div>
          </div>
        )
    }
}

function mapStateToProps({ authedUser }, { id, users }){
    const answersCount = Object.keys(users[id].answers).length
    const questionsCount = users[id].questions.length
    const score = answersCount + questionsCount
    const name = users[id].name
    const avatarURL = users[id].avatarURL
    return {
        authedUser,
        answersCount,
        questionsCount,
        score,
        name,
        avatarURL
    }
}

export default connect(mapStateToProps)(Score)