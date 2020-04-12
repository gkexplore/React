import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Poll extends Component {

    handleViewPoll = (e, question_id) => {
        e.preventDefault()
        this.props.history.push(`/questions/${question_id}`)
    }

    render() {

        const { question, user, answered, authedUser } = this.props
        const { name, avatarURL } = user
        const { id, optionOne, optionTwo } = question

        console.log(authedUser)

        return (
            <div>
                {(((optionOne.votes.includes(authedUser)) || (optionTwo.votes.includes(authedUser))) && answered) &&
                    <div>
                        <span>{name} asks</span>
                        <img src={avatarURL}
                            alt={`Avatar of ${name}`}
                            className='avatar'
                        />
                        <div className='tweet-info'>
                            <p>Would you rather</p>
                            <p>{optionOne.text}</p>
                        </div>
                        <button onClick={(e) => this.handleViewPoll(e, id)}>View Poll</button>
                    </div>
                }

                {(((!optionOne.votes.includes(authedUser) && !optionTwo.votes.includes(authedUser)) && !answered)) &&
                    <div>
                        <span>{name} asks</span>
                        <img src={avatarURL}
                            alt={`Avatar of ${name}`}
                            className='avatar'
                        />
                        <div className='tweet-info'>
                            <p>Would you rather</p>
                            <p>{optionOne.text}</p>
                        </div>
                        <button onClick={(e) => this.handleViewPoll(e, id)}>View Poll</button>
                    </div>
                }

            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id, answered }) {
    const question = questions[id]
    return {
        authedUser,
        user: users[question.author],
        question: question
            ? question
            : null,
        answered
    }
}

export default withRouter(connect(mapStateToProps)(Poll))