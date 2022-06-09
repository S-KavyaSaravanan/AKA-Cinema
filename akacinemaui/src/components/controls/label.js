import React from 'react';
import styled from 'styled-components';

export const StyledLable = styled.label`
display: inline-block;
font-size: 14px;
color: #3B4455;
margin-bottom: 10px;
width: 80%;
`;

export const Label = (props) => {
    return(
        <StyledLable className="hp-label">{props.title}</StyledLable>
    )
}