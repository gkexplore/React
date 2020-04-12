import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUsers'
import { Redirect } from 'react-router-dom'

class Login extends Component{

    state = {
        toHome: false,
    }
   
    handleLogin = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const id = e.target.value
        dispatch(setAuthedUser(id))

        this.setState(()=>({
            toHome: true
        }))
    }

    render(){
        const { toHome } = this.state
        if(toHome === true){
            return <Redirect to='/home'/>
        }
        return(
            <div>
                <h3>Welcome to the Would You Rather App!</h3>
                <span>Please sign in to continue</span>
                <span>Sign In</span> <br/>
                <select onChange={this.handleLogin}>
                   <option value=''>Select a User</option>
                   <option value='sarahedo'>Sarah Edo</option>
                   <option value='tylermcginnis'>Tyler McGinnis</option>
                   <option value='johndoe'>John Doe</option>
                </select>
            </div>
        )
    }
}

export default connect()(Login)