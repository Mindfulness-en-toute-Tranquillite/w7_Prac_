import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { __getCardsThunk } from '../redux/modules/cardsSlice';

// card 클릭시 Detail page로 가도록 기능구현 (games/:gameId)(Dynamic Route with useParam) 
// @@gameID가 정확히 뭔지 확인@@
// 배경사진등록(submit page에서 등록할 수 있도록)

function CardList() {
    // const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const {cards, error} = useSelector((state) => state.cardsSlice)
    console.log("cards => ", cards )
    useEffect(() => {
        dispatch(__getCardsThunk())
    }, [dispatch])
    console.log("dispatch get ->", dispatch)
    
    return (
    <>
        <div>
        {/* 카드리스트 여기서는 axios get으로 카드리스트(지금은dbjson)가져와서 거기다 맵으로 div에 뿌려준다 */}
        </div>
{/* card 하나하나 및 카드 클릭시 Detail page로 이동*/}
        <div>
            {
                cards.map((card) => {
                    return (
                        <StCardList onClick={(id) => {
                            navigate(`/games/:gameId${id}`);
                        }}
                        key={card.id}>
                            {card.title} <br />
                            {card.optionA} vs {card.optionB}
                        </StCardList>
                    )
                })
            }
{/* 게임 등록하기 버튼 */}
        </div>
        <button
        onClick={() => {
            navigate("/game/submit");
        }}
        >게임 등록하기
        </button>

    </>

    
    )
}
export default CardList

const StCardList = styled.div`
    width: 200px;
    height: 100px;
    background-color: green;
    margin: 10px;
    &:focus-within {
    box-shadow: 0 0 0 1px #292727; }
    cursor: pointer;
`