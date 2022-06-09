import React from 'react';
import { Label } from './label';
import styled from 'styled-components';

export const StyledPassword = styled.input`
display: block;
font-size: 14px;
height: 27px;
border-radius: 4px;
color: #3B4455;
margin-bottom: 10px;
width: 80%;
border: 1px solid #D8DADD;
padding: 4px 8px 4px 4px;

:hover, :focus, :active {
    border: 1px solid #D8DADD;
}
`;

export const Password = (props) => {

    return (
        <>
            <Label title={props.title} />
            <StyledPassword className="hp-textbox" type="password" onChange={props.onChange}></StyledPassword>
        </>
    )
}