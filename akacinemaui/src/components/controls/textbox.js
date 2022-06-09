import React from 'react';
import { Label } from './label';
import styled from 'styled-components';

export const StyledTextbox = styled.input`
display: inline-block;
font-size: 14px;
height: 35px;
border-radius: 4px;
color: #3B4455;
margin-bottom: 10px;
width: 80%;
border: 1px solid #D8DADD;
padding: 4px 8px 4px 4px;
box-sizing: border-box;
`;

export const MaskedTextbox = (props) => {

    return (
        <>
            <Label title={props.title} />
            <StyledTextbox className="hp-textbox" type={props.type} onChange={props.onChange}></StyledTextbox>
        </>
    )
}