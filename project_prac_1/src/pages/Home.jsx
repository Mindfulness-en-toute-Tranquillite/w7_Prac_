import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Home() {
    const navigate = useNavigate();
    return (
    <StBackGroundImg>
        <StHomeCardWrapper>
            <StLogoImg />
        <h1>게임 설명</h1>
            <StExplanationWrapper>
                <div>balance game.
                    <br />
                    마음에 드는 것을 골라보아요.
                </div>
            </StExplanationWrapper>
            <StButtonWrapper>
                <button
                onClick={() => {
                    navigate("/games");
                }}
                >입장하기
                </button>
            </StButtonWrapper>

            

        </StHomeCardWrapper>
    </StBackGroundImg>
    )
}

export default Home

const StLogoImg = styled.div`
    background-image: url('http://images.shoutwiki.com/dyos/4/47/Spongebob.png');
    background-size: cover;
    background-position: center;
    margin-top: 20px;
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StHomeCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2pt solid black;
    border-radius: 15pt;
    margin: 150pt;
`
const StExplanationWrapper = styled.div`
    margin: 20pt;
`
const StButtonWrapper = styled.div`
    margin: 50pt;
`   
const StBackGroundImg = styled.div`
    background-image: url('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dfbff884-5d27-4cdd-8f94-5fe422c7bb98/logout.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230320T104211Z&X-Amz-Expires=86400&X-Amz-Signature=9cb042ebe976e7c06005b6b994e4b26e8c3a3b80af84db704bb679a272a31b98&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22logout.png%22&x-id=GetObject');
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`