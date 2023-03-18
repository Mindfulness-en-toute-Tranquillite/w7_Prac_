import axios from 'axios';
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
        tilte: '',
        optionA: '',
        optionB: '',
    })
    console.log("card =>", card)

    const [title, setTitle] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    // console.log("title ->", title)
    // console.log("gameA ->", gameA)
    // console.log("gameB ->", gameB)

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
        setCard({title:'', optionA:'',optionB: ''})
    }
    
    // = async (id) =>  {
    //     axios.post(`http://localhost:4000/cards`, {title, optionA, optionB})
    //     fetchCards();}


    return (
    <form>
        <div>
            나만의 밸런스 게임을 등록해주세요!
            <StInputWrapper onSubmit={onSubmitHandler}>
                <label />
                제목 <input 
                type="text" placeholder='8글자 내로 제목을 지어주세요.' maxLength="10" minLength="1"
                value={card.title}
                onChange={handleTitleChange}
                />
                <label/>optionA
                <input 
                type="text" placeholder='A의견을 적어주세요' minLength="1"
                value={card.optionA}
                onChange={handleGameAchange}
                />
                <label/>optionB
                <input 
                type="text" placeholder='B의견을 적어주세요'minLength="1"
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
    </form>
    )
}

export default Edit
const StFormWrapper = styled.form`
    
`
const StInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 14pt;
    gap: 5pt;
`