import React from 'react';
import '../../style/main.scss'
import { Link } from 'react-router-dom'
import logo from "../../style/images/g271.png"
import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
import UserProvider from "../pages/userProvider"

// work on the nav bar need to be done frist 
console.log(firebase)

function Nav() {
    if (firebase.auth().currentUser = null) {
        return (
            <ul className="nav-links">
                <Link to="/Sign-In">
                    <li>Register</li>
                </Link>
            </ul>
        )
    } else {
        <Link to="/Sign-In">
            <li>Register</li>
        </Link>
    }
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <UserProvider>
                <button to="/Sign-In"
                    onClick={() => 
                    firebase.auth().signOut().then(() => 
                    console.log("signOut"))
                    .catch(err => console.log(err))}>
                    Logout
                </button>
                <ul className="nav-links">
                    <Link to="/Sign-In">
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
            </UserProvider>
        </nav>
    )
}

export default Nav;