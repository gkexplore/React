import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ListPolls from './ListPolls'
import { Redirect } from 'react-router-dom'

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        if(!this.props.authedUser){
            return <Redirect to='/'/>
        }
        return (
            <ListPolls />
        )
    }
}

function mapStateToProps({authedUser}){
    return{
        authedUser
    }
}


export default connect(mapStateToProps)(Home)