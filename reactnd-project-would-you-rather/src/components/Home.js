import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ListPolls from './ListPolls'

class Home extends Component{
    
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    render(){
        return(
            <ListPolls/>
        )
    }
}


export default connect()(Home)