import React, { Component } from 'react'
import { connect } from 'react-redux'
import serializeFrom from 'form-serialize'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const question = serializeFrom(e.target, { hash: true })
        console.log(question)
        this.props.dispatch(handleAddQuestion(question))
        this.props.history.push('/home')
    }

    render() {
        if(!this.props.authedUser){
            return <Redirect to='/'/>
        }
        return (
            <div>
                <div>Create New Question</div>
                <div>
                    <span>Complete the question:</span>
                    <b>Would you rather...</b>
                    <form onSubmit={(e) => this.handleSubmit(e)}>

                        <input type='text' name='optionOneText' placeholder='Enter Option One Text Here' />
                        <b>OR</b>
                        <input type='text' name='optionTwoText' placeholder='Enter Option Two Text Here' />
                        <input type='hidden' name='author' value={this.props.authedUser} />
                        <button type='submit' />
                    </form>
                </div>
            </div>

        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(NewQuestion)