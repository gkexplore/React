import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from './Score'
import { Redirect } from 'react-router-dom'

class LeaderBoard extends Component {
    render() {
        if(!this.props.authedUser){
            return <Redirect to='/'/>
        }
        return (
            <div>
                {this.props.userIds.map((id) => (
                    <Score key={id} id={id} users={this.props.users} />
                ))}
            </div>

        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        userIds: Object.keys(users)
            .sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length)
                - (Object.keys(users[a].answers).length + users[a].questions.length)),
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)