import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.style.css'
const Login = ({ setAuthenticate }) => {
    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();

        setAuthenticate(true)
        navigate("/")
    }

    return (
        <div className="Login">
            <h1>로그인</h1>
            <form onSubmit={(e) => loginUser(e)} className="Login-form">
                <input type="text" placeholder="id"></input>
                <input type="text" placeholder="password"></input>
                <button type="submit">로그인</button>
                <div className="links">
                    <Link>회원이 아니신가요?</Link>
                    <Link>비밀번호를 잊어버리셨나요?</Link>
                </div>

            </form>

        </div>
    )
}

export default Login