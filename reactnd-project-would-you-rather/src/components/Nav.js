import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUsers'
import { connect } from 'react-redux'

class Nav extends Component {

    handleLogout = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(''))
        this.props.history.push('/')
    }

    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/home' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>
                </ul>
                <div className='nav'>
                    {this.props.authedUser &&
                        <ul>
                            <li>
                                <span>Helle {this.props.authedUser}</span>
                            </li>
                            <li>
                                <button onClick={this.handleLogout}>
                                    Logout
                            </button>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
        )
    }
}

export default withRouter(connect()(Nav))