import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: "",
        password: "",
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

        console.log(user);
    };

    console.log(user);

    return (
        <form onSubmit={submitButtonHandler}>
        <h1>회원가입</h1>
        <div>
            <div>
                <input type="text" value={user.id} placeholder="아이디를 입력해주세요" 
                name='id'
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