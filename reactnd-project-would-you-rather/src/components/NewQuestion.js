import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component{
    handleSubmit = (e) =>{
        e.placeholder()
    }
    render(){
        return(
            <div>
                <div>Create New Question</div>
                <div>
                    <span>Complete the question:</span>
                    <b>Would you rather...</b>
                    <form onSubmit={()=>this.handleSubmit}>
                        <input type='text' name='optionOne' placeholder='Enter Option One Text Here'/>
                        <b>OR</b>
                        <input type='text' name='optionTwo' placeholder='Enter Option Two Text Here'/>
                        <button type='submit'/>
                    </form>
                </div>
            </div>

        )
    }
}

export default connect()(NewQuestion)