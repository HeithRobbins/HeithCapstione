import React from 'react';
import '../../style/main.scss'
import { Link } from 'react-router-dom'




function Nav() {
    

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/home">
                <li>Home</li>
                </Link>
                <Link to="/KeithCyndi">
                    <li>KeithCyndi</li>
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