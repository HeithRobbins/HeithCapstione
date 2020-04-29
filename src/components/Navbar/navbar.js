import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


export default class NavigationComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="nav-container">
                <div className="nav-wrapper">
                    <div className='nav-link-wrapper'>
                        <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                    </div>

                    <div className='family-container'>
                        <div className='nav-link-wrapper'>
                            <NavLink to="/Keith-Cyndi" activeClassName="nav-link-active">Keith-Cyndi</NavLink>
                        </div>

                        <div className="children-of-parents">
                            <div className='nav-link-wrapper'>
                                <NavLink to="/Nathan" activeClassName="nav-link-active">Nathan</NavLink>
                            </div>

                            <div className='nav-link-wrapper'>
                                <NavLink to="/Emily" activeClassName="nav-link-active">Emily</NavLink>
                            </div>

                            <div className='nav-link-wrapper'>
                                <NavLink to="/Casey" activeClassName="nav-link-active">Casey</NavLink>
                            </div>

                            <div className='nav-link-wrapper'>
                                <NavLink to="/Heith" activeClassName="nav-link-active">Heith</NavLink>
                            </div>

                            <div className='nav-link-wrapper'>
                                <NavLink to="/Sena" activeClassName="nav-link-active">Sena</NavLink>
                            </div>

                            <div className='nav-link-wrapper'>
                                <NavLink to="/Jeremy" activeClassName="nav-link-active">Jeremy</NavLink>
                            </div>

                            <div className='nav-link-wrapper'>
                                <NavLink to="/Shanelle" activeClassName="nav-link-active">Shanelle</NavLink>
                            </div>

                            <div className='nav-link-wrapper'>
                                <NavLink to="/Sterling" activeClassName="nav-link-active">Sterling</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}