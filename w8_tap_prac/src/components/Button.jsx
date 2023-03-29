import React from 'react';

const TapButton = ({ onClick, title }) => (
    <button onClick={onClick}>{title}</button>
);

export default TapButton;