import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from './Score'

class LeaderBoard extends Component{
    render(){
        return(
            <div>
                 {this.props.statsIds.map((id)=>(
                 <Score key={id} id={id} stats={this.props.stats}/>
            ))}
            </div>
           
        )
    }
}
function calculateScore(questions, users){
    let stats = {}
    Object.keys(users).map((id) => {
        let temp = {}
        temp.answersCount = Object.keys(users[id].answers).length
        console.log(Object.keys(users[id].answers).length)
        temp.name = users[id].name
        temp.avatarURL = users[id].avatarURL
        temp.questionsCount = Object.keys(questions).filter((qid)=> 
                                        questions[qid].author === users[id].id).length
        temp.score = temp.answersCount + temp.questionsCount
        let key = id
        stats[key] = temp
    })
    return stats
}

function mapStateToProps({questions, users}){
    const stats = calculateScore(questions, users)
    console.log(stats)
    return{
        statsIds: Object.keys(stats)
        .sort((a,b) => stats[b].score - stats[a].score),
        stats
    }
}
export default connect(mapStateToProps)(LeaderBoard)