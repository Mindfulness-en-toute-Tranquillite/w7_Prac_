import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Home() {
    const navigate = useNavigate();
    return (
    <>
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
    </>
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