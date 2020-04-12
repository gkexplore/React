import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import Nav from './Nav'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Question from './Question'
import NotFound from './NotFound'

class App extends Component{
  render(){
    return(
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav authedUser={this.props.authedUser}/>
              {
                this.props.loading === true
                ? null
                : <div>
                    <Route path='/' exact component={Login}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/new' component={NewQuestion}/>
                    <Route path='/questions/:id' component={Question} />
                    <Route path='/leaderboard' component={LeaderBoard}/>
                    <Route path='/notFound' component={NotFound} />
                  </div>
              }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(App)
