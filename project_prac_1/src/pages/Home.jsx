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
                    navigate("/login");
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
    background-image: url('https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdfbff884-5d27-4cdd-8f94-5fe422c7bb98%2Flogout.png?id=5ee3393f-d4ef-4772-9b8c-b05e32667acb&table=block&spaceId=cc4da40c-bf96-414a-a09f-a7f478e1d2c5&width=2000&userId=3f23687d-17d1-4fb1-a726-fbd8eb60ed0a&cache=v2');
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`