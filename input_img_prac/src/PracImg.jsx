import React from 'react';
import styled from 'styled-components';

function PracImg() {
//   const styles = {
//     backgroundImage: 'url(http://images.shoutwiki.com/dyos/4/47/Spongebob.png)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   };

    return (
    // <div style={styles}>
    <StBackGroundImg>
        <h1>Hello, world!</h1>
    </StBackGroundImg>
    );
}

export default PracImg;
const StBackGroundImg = styled.div`
    background-image: url('http://images.shoutwiki.com/dyos/4/47/Spongebob.png');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`