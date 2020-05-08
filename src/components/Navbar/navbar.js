import React from 'react';
import '../../style/main.scss'
import { Link } from 'react-router-dom'
import logo from "../../style/images/g271.png"
import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
import UserProvider from "../pages/userProvider"



function Nav() {

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
                <ul className="nav-links">
                    <Link to="/SignIn">
                    <li>Register</li>
                    </Link>
                <Link to="/KeithCyndi">
                    <li>Keith Cyndi</li>
                </Link>
                <Link to="/Nathan">
                    <li>Nathan</li>
                </Link>
                <Link to="/Emily">
                    <li>Emily</li>
                </Link>
                <Link to="/Casey">
                <li>Casey</li>
                </Link>
                <Link to="/Heith">
                <li>Heith</li>
                </Link>
                <Link to="/Sena">
                <li>Sena</li>
                </Link>
                <Link to="/Jeremy">
                <li>Jeremy</li>
                </Link>
                <Link to="/Shanelle">
                <li>Shanelle</li>
                </Link>
                <Link to="/Sterling">
                <li>Sterling</li>
                </Link>
            </ul>
            
        </nav>
    )
}

export default Nav;