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
    console.log("dispatch => ", dispatch )
    const {cards, error} = useSelector((state) => state.cardsSlice)
    console.log("state => ", cards)
    useEffect(() => {
        dispatch(__getCardsThunk())
    }, [dispatch])
    console.log("dispatch get ->", dispatch)
    
    return (
    <StBackGroundImg>
        {/* 게임 등록하기 버튼 */}
        <button
        onClick={() => {
        navigate("/game/submit");
        }}
        >게임 등록하기
        </button>
        <div>
        {/* 카드리스트 여기서는 axios get으로 카드리스트(지금은dbjson)가져와서 거기다 맵으로 div에 뿌려준다 */}
        </div>
{/* card 하나하나 및 카드 클릭시 Detail page로 이동*/}
        <div>
            {
                cards?.map((card) => {
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
        </div>


    </StBackGroundImg>

    
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
const StBackGroundImg = styled.div`
    background-image: url('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1a08c564-2757-4fe9-84f0-f78d551581bd/cardlist.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230320T104844Z&X-Amz-Expires=86400&X-Amz-Signature=c7fa241efe4eff438a3ef3750fc68cc27ec43505a2dfbe45691c65dfebc47005&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22cardlist.png%22&x-id=GetObject');
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`