import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import apis from '../axios/api';
import { cookies } from '../shared/cookie';

function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        nickname: "",
        password: "",
        confirmPassword: "",
    });

    const changeInputHandler = (e) => {
        const {value, name} = e.target;
        // console.log(name);
        setUser((old)=>{
            return {...old, [name]: value}
        })
    };
    
    const submitButtonHandler = (e) => {
        e.preventDefault();
        apis.post("/register", user);
        // console.log(user);
    };

    console.log(user);

    return (
        <form onSubmit={submitButtonHandler}>
        <h1>회원가입</h1>
        <div>
            <div>
                <input type="text" value={user.nickname} placeholder="아이디를 입력해주세요" 
                name='nickname'
                onChange={changeInputHandler}/>
                
                <input type="password"value={user.password} placeholder="비밀번호를 입력해주세요" 
                name='password'
                onChange={changeInputHandler}/>
            </div>
        </div>
        <div>
            <button >회원가입</button>
            <button type="button" 
            onClick={() => navigate("/login")}>이전으로</button>
            
        </div>

        </form>
    )
}

export default Register