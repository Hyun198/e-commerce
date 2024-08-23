import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.style.css'
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../../redux/actions/authenticateAction';

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const loginUser = (e) => {
        e.preventDefault();
        dispatch(authenticateAction.login(id, password))
        navigate("/")
    }

    return (
        <div className="Login">
            <h1>로그인</h1>
            <form onSubmit={(e) => loginUser(e)} className="Login-form">
                <input type="text" placeholder="id" onChange={(e) => setId(e.target.value)}></input>
                <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
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