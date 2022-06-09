import React, { useState } from 'react';
import styled from 'styled-components';


export const StyledDropDown = styled.div`
  position: relative;
  display: inline-block;


.hp-dropbtn {
  background-color: #ffffff;
  color: #3B4455;
  padding: 16px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
}

.hp-dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  max-width: 160px;
}

.hp-dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.hp-dropdown-content a:hover {background-color: #f1f1f1}

:hover .hp-dropdown-content {
  display: block;
}

:hover .hp-dropbtn {
  color: #0077D9;
  border-bottom: 2px solid #0077D9;
}
`;

export const Dropdown = (props) => {
    return (
        <StyledDropDown className="hp-dropdown">
            <button className="hp-dropbtn" onClick={props.onClick} value={props.title}>{props.title}</button>
            {props.options && (<div className="hp-dropdown-content">
                {
                    props.options.map((item) => (<a href="#" onClick={props.onClick}>{item.title}</a>))
                }
            </div>)}
        </StyledDropDown>
    );
}