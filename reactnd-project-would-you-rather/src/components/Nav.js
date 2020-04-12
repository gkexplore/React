import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
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

                {this.props.authedUser &&
                    <ul>
                        <li>
                            <span>Helle {this.props.authedUser}</span>
                        </li>
                        <li>
                            <NavLink to='/logout' activeClassName='active'>
                                Logout
                  </NavLink>
                        </li>
                    </ul>
                }
            </nav>
        )
    }
}

export default Nav