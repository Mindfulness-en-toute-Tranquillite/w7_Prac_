import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StStartButton } from '../components/Button';

function Home() {
    const navigate = useNavigate();
    return (
    <StBackGroundImg>
        <StHomeContainer>
        <div>
            <StTitle src={"Balance Game.png"}/>
        </div>
        <StHomeCardWrapper>
        <StButtonWrapper>
            <StPosition>
                <StStartButton
                onClick={() => {
                    navigate("/login");
                }}
                >GAME START
                </StStartButton>
                <StExplanation src={"Frame 36.png"}/>
            </StPosition>
        </StButtonWrapper>

        </StHomeCardWrapper>
        </StHomeContainer>
    </StBackGroundImg>
    )
}

export default Home
const StBackGroundImg = styled.div`
    background-image: url('https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdfbff884-5d27-4cdd-8f94-5fe422c7bb98%2Flogout.png?id=5ee3393f-d4ef-4772-9b8c-b05e32667acb&table=block&spaceId=cc4da40c-bf96-414a-a09f-a7f478e1d2c5&width=2000&userId=3f23687d-17d1-4fb1-a726-fbd8eb60ed0a&cache=v2');
    /* background-size: cover; */
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
const StHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`
const StHomeCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50pt;
    height: 67vh;
`
const StButtonWrapper = styled.div`
`   
const StTitle = styled.img`
    width: 40vw;
    height: 7vh;
`
const StExplanation = styled.img`
    width: 40vw;
    height: auto;
    position: absolute;
`
const StPosition = styled.div`
    position: relative;
    /* transform: translateX(-50%); */
    width: 40vw;
    display: flex;
    justify-content: center;
`
