import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from './Score'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                {this.props.userIds.map((id) => (
                    <Score key={id} id={id} users={this.props.users} />
                ))}
            </div>

        )
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users)
            .sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length)
                - (Object.keys(users[a].answers).length + users[a].questions.length)),
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)