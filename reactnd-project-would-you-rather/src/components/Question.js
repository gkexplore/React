import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class Question extends Component{

    state = {
        answer: 'optionOne'
    }

    handleOptionChange = (e) =>{
        this.setState(()=>({
            answer: e.target.value
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const { answer } = this.state
        const { qid, authedUser } = this.props
        console.log(qid, authedUser, answer)
        this.props.dispatch(handleQuestionAnswer({authedUser, qid, answer}))
        this.props.history.push(`/questions/${qid}`)
    }

    render(){
        const{ question, user, optionOneAnswered, optionTwoAnswered, totalAnswers, authedUser, answered} = this.props
        if(!question){
           return <Redirect to='/notFound'/>
        }
        
        const{ name, avatarURL } = user
        const{ optionOne, optionTwo} = question

        return( 
            <div>
                <div>Question</div>
               {answered &&
                <div>
                    <span>Added By {name}</span>
                    <img src={avatarURL}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                    />
                    <div>
                    <span>Would you rather be {optionOne.text}</span>
                    <span> {`${optionOneAnswered} out of ${totalAnswers} votes`} </span>
                    {
                        (optionOne.votes.includes(authedUser) &&
                        <div>
                              <span> You Answered</span>
                              
                        </div>
                        )
                    }
                    </div>

                    <div>
                    <span>Would you rather be {optionTwo.text}</span>
                    <span> {`${optionTwoAnswered} out of ${totalAnswers} votes`} </span>
                    {
                        (optionTwo.votes.includes(authedUser) &&
                        <div>
                              <span> You Answered</span>
                              
                        </div>
                        )
                    }
                    </div>
                </div>
            }

        { !answered &&
                <div>
                    <span>{name} asks</span>
                    <img src={avatarURL}
                     alt={`Avatar of ${name}`}
                    className='avatar'
                    />
                    <div className='tweet-info'>
                        <p>Would you rather</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="radio">
                            <label>
                                <input type="radio" name='answer' value="optionOne" checked={true} onChange={(e)=>this.handleOptionChange}/>
                                {optionOne.text}
                            </label>
                            </div>
                            <div className="radio">
                            <label>
                                <input type="radio" name='answer' value="optionTwo" onChange={(e)=>this.handleOptionChange}/>
                                {optionTwo.text}
                            </label>
                            </div>
                            <button
                            type='submit'>Submit</button>
                        </form>
                    </div>
                                    
                </div>
            }
               
           </div>
        )     
           
    }
}

function mapStateToProps({ authedUser, users, questions }, props){
    const { id } = props.match.params
    console.log(id)
    const question = questions[id]
    if(!question){
       return question
    }
    console.log(question)
    const optionOneAnswered = question.optionOne.votes.length
    const optionTwoAnswered = question.optionTwo.votes.length
    const totalAnswers = optionOneAnswered + optionTwoAnswered
    const answered = (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
    ?true
    :false
    return {
        authedUser,
        user: users[question.author],
        question: question,
        optionOneAnswered: optionOneAnswered,
        optionTwoAnswered: optionTwoAnswered,
        totalAnswers: totalAnswers,
        answered: answered,
        qid:id
    }
}

export default connect(mapStateToProps)(Question)