import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.input`
display: block;
font-size: 14px;
height: 37px;
color: #ffffff;
margin-bottom: 10px;
width: 83%;
background-color: #0077D9;
border: 1px solid #D8DADD;
padding: 4px 8px 4px 4px;
cursor: pointer;
border-radius: 8px;
border-color: #00FFBF;   
`;

export const Button = (props) => {

    return (
        <>
            <StyledButton className="hp-button" type="button" value={props.title} onClick={props.onClick}/>
        </>
    )
}