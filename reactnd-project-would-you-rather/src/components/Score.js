import React, {Component} from 'react'
import { connect } from 'react-redux'

class Score extends Component{
    render(){
        const{ id, stats} = this.props

        return(
            <div>
            <span>{stats[id].name} asks</span>
            <img src={stats[id].avatarURL}
                alt={`Avatar of ${stats[id].name}`}
                className='avatar'
            />
            <div>
                <div>
                    <span>Answered Questions {stats[id].answersCount}</span>
                </div>
                <div>
                    <span>Created Questions {stats[id].questionsCount}</span>
                </div>
            </div>
            <div>
                <p>Score</p>
                <p>{stats[id].score}</p>
            </div>
          </div>
        )
    }
}

function mapStateToProps({ authedUser }, { id, stats }){
    
    return {
        authedUser,
        id,
        stats
    }
}

export default connect(mapStateToProps)(Score)