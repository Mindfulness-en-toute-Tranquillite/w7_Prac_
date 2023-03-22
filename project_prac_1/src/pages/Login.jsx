import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
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
        //  서버에 보내기 (POST 요청 나중에 작업)
        console.log(user);
    };

    console.log(user);

    return (
        <form onSubmit={submitButtonHandler}>
        <h1>로그인</h1>
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
            <button>로그인</button>
            <button type="button" 
            onClick={() => navigate("/signup")}>
                회원가입 하러가기</button>
        </div>
        </form>
    )
}

export default Login