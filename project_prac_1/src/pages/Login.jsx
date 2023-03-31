import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { cookies } from '../shared/cookie';
import { apis } from '../axios/api';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        nickname: "",
        password: "",
    });

    const changeInputHandler = (e) => {
        const {value, name} = e.target;
        // console.log(name);
        setUser((old)=>{
            return {...old, [name]: value}
        })
    };
    
    const submitButtonHandler = async (e) => {
        e.preventDefault();
        //  서버에 보내기 (POST 요청 나중에 작업)

        //  then으로 프로미스 벗기기
        // apis.post("/login", user).then((result) => {
        //     console.log(result.data.token);
        // });

        //  async/await
        try {
            const result = await apis.post("/login", user);
            console.log(result.data.token)
            cookies.set('token', 'result.data.token', { path: '/' });
        }   catch (e) {
            alert("로그인 실패")
        }
    };
        //  쿠키가 있는지 확인.
        //  쿠키가 있으면 gamelist로 보냄.
        // const token = cookies.get("token")
        // useEffect(() => {
        //     if(token) {
        //         navigate("/games");
        //     } 
        //     console.log(token)
        // }, [token]);

        // 가드
        const token = cookies.get("token")
        if(token) {
            navigate("/games");
        }
    console.log(user);

    return (
        <form onSubmit={submitButtonHandler}>
        <h1>로그인</h1>
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
            <button>로그인</button>
            <button type="button" 
            onClick={() => navigate("/signup")}>
                회원가입 하러가기</button>
        </div>
        </form>
    )
}

export default Login