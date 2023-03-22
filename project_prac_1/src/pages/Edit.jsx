import React, { useState } from 'react'
import { useDispatch, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { __addCardsThunk } from '../redux/modules/cardsSlice';

//  등록하면 cardlist에 card 추가 되도록.

function Edit() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [card, setCard] = useState({
        title: "",
        optionA: "",
        optionB: "",
    })
    // console.log("card =>", card)

    // const [title, setTitle] = useState("");
    // const [optionA, setOptionA] = useState("");
    // const [optionB, setOptionB] = useState("");

    // title 변경 감지하는 함수
    const handleTitleChange = (e) => {
        setCard({...card, title: e.target.value})
    }
    //  gameA 변경 감지하는 함수
    const handleGameAchange = (e) => {
        setCard({...card, optionA: e.target.value})
    }
    //  gameB 변경 감지하는 함수
    const handleGameBchange = (e) => {
        setCard({...card, optionB: e.target.value})
    }
    
    //추가 함수
    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(__addCardsThunk(card))
        setCard({title: "", optionA: "", optionB: ""})
    }
    console.log("dispatch-> ",dispatch)
    

    return (
    <StBackGroundImg>
    <div>
        <div>
            <StTitleWrapper>
            나만의 밸런스 게임을 등록해주세요!
            </StTitleWrapper>
            <StInputWrapper onSubmit={onSubmitHandler}>
                <label />
                제목 <input 
                type="text" placeholder='8글자 내로 제목을 지어주세요.(10자 이내)' minLength="1" maxLength="10"
                value={card.title}
                onChange={handleTitleChange}
                />
                <label/>optionA
                <input 
                type="text" placeholder='A의견을 적어주세요(25자 이내)' minLength="1" maxLength="25"
                value={card.optionA}
                onChange={handleGameAchange}
                />
                <label/>optionB
                <input 
                type="text" placeholder='B의견을 적어주세요(25자 이내)'minLength="1" maxLength="25"
                value={card.optionB}
                onChange={handleGameBchange}
                />
            </StInputWrapper>
            <div>
                <button
                onClick={() =>{
                    dispatch(__addCardsThunk(card))
                    setCard({ title: '', optionA: '', optionB: '' })
                }
                }
                >
                등록
                </button>&nbsp;
                <button 
                onClick={() => {
                    navigate("/games");
                }}
                >취소</button>
            </div>

        </div>
    </div>
    </StBackGroundImg>
    
    )
}

export default Edit
const StFormWrapper = styled.form`
    border: 2px dotted lightgray;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 250px;
    /* margin: 17pc; */
    height: 35vh;
    width: 50vw;
`
const StInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 14pt;
    gap: 5pt;
`
const StTitleWrapper = styled.h2`
    margin-top: 30px;
`
const StBackGroundImg = styled.div`
    background-image: url('https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa0c212ed-307b-4240-9215-ff8740e341fb%2Fsubmit.png?id=7663bed5-1a41-4e64-91e2-cba35e3dc074&table=block&spaceId=cc4da40c-bf96-414a-a09f-a7f478e1d2c5&width=2000&userId=3f23687d-17d1-4fb1-a726-fbd8eb60ed0a&cache=v2');
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`