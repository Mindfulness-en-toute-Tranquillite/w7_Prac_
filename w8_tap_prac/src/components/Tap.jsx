import { useEffect, useState } from "react"
import styled from "styled-components"

function Tab({tab}){
    let [fade, setFade] = useState('')
    // if(tab == 0){
    //     return <div>내용0</div>
    // }else if(tab == 1){
    //     return <div>내용1</div>
    // }else if(tab == 2){
    //     return <div>내용2</div>
    // }
    
    useEffect(()=>{
        let a = setTimeout(()=>{ setFade('end') }, 300)  //fade의 값을 end로
        
        return ()=>{  //clean up 함수 (fade className을 떼었다 붙여야 하니까)
            clearTimeout(a);
            setFade('')
        }
    }, [tab])

    return (
        <div className={'start ' + fade}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
        </div>
    )
}
export default Tab
const StStart = styled.div`
    opacity: 0;
`
    
const StEnd = styled.div`
    opacity: 1;
    transition: opacity .5s;
`  

