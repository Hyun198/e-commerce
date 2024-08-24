import React, { useState } from 'react'
import './Navbar.style.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { authenticateAction } from '../../redux/actions/authenticateAction'


const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSlider = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const navigate = useNavigate();
    const categories = [
        "여성",
        "Divided",
        "남성",
        "유아",
        "아동",
        "Sale",
        "지속가능성",
    ]
    const dispatch = useDispatch();
    const authenticate = useSelector(state => state.auth.authenticate);

    const search = (event) => {
        if (event.key === 'Enter') {
            navigate(`?q=${event.target.value}`)
        }
    }
    const logout = () => {
        dispatch(authenticateAction.logout())
        navigate("/")
    }

    return (
        <div className="navbar">
            <div className="menu" onClick={toggleSlider}>
                <FontAwesomeIcon icon={isSidebarOpen ? faX : faBars} />
            </div>
            <div className="login">
                <FontAwesomeIcon icon={faUser} />
                {authenticate === true ? <div className="Logout" onClick={logout}><span>Logout</span> </div> : <Link to="/login"><span>Login</span></Link>}
            </div>
            <div className="logo">
                <Link to="/"><img src="hm.png" width="120" height="100" /></Link>
            </div>
            <div className="category">
                <ul>
                    {categories.map((category, index) => (
                        <li key={index}># {category}</li>
                    ))}
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder='Search...' onKeyPress={search} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
            {/* 사이드바 (모바일에서만 보임) */}
            <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="search-bar">
                    <input type="text" placeholder='Search...' onKeyPress={search} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                </div>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index}># {category}</li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default Navbar 