import React from 'react'
import './Navbar.style.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
const Navbar = () => {
    const categories = [
        "여성",
        "Divided",
        "남성",
        "유아",
        "아동",
        "Sale",
        "지속가능성",
    ]
    return (
        <div className="navbar">
            <div className="login">
                <FontAwesomeIcon icon={faUser} />
                <Link to="/login"><span>Login</span></Link>
            </div>
            <div className="logo">
                <Link to="/"><img src="hm.png" width="120" height="100" /></Link>
            </div>
            <div className="category">
                <ul>
                    {categories.map((category) => (
                        <li># {category}</li>
                    ))}
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder='Search...' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>

            </div>

        </div>
    )
}

export default Navbar