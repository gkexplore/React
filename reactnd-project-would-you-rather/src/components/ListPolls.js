import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'


class ListPolls extends Component{
    state = {
        answered: false,
    }

    handleQuestions = (answered) =>{
        this.setState(()=>({
            answered
        }))
    }

    render(){
        return(
           <div>
               <div id='menu-outer'>
                <div className='table'>
                    <ul id='horizontal-list'>
                        <li onClick={()=>this.handleQuestions(false)}>UnAnswered Questions</li>
                        <li onClick={() =>this.handleQuestions(true)}>Answered Questions</li>
                    </ul>
                </div>
            </div>
               {this.props.questionIds.map((id)=>(
                   <Poll key={id} id={id} answered={this.state.answered}/>
               ))}
           </div>
        )
    }
}

function mapStateToProps({questions}){
    return{
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(ListPolls)