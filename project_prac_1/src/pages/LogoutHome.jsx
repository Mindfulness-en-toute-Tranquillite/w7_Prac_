import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import apis from '../axios/api';
import { cookies } from '../shared/cookie';

function LogoutHome() {
    const navigate = useNavigate();

    const checkToken = async () => {
        const token = cookies.get("token");
        try {
            await apis.put("/login", {
                headers: {
                    authorization: `Bearer ${token}`,
            },
        });
    } catch (e) {
        alert('비정상적인 접근입니다.')
        navigate("/login")
    }
    };

        //  로그아웃 가드
        useEffect(() => {
            const token = cookies.get("token");
            if (!token) {
                navigate("/login")
            }
            checkToken();
        }, []);
    return (
    <div>
        <button
            onClick={() => {
                cookies.remove("token")
                navigate("/login");
            }}
            >로그아웃</button>

    </div>
    )
}

export default LogoutHome