import React, { useState } from 'react';
import styled from 'styled-components';
import withContext from "../withContext";
import { MaskedTextbox, Button } from './controls';
import { useHistory } from "react-router-dom";
import Food1 from './images/Food1.JPG';
import Food2 from './images/Food2.jpg';
import Food3 from './images/Food3.png';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

export const StyledDocTile = styled.div`
height: 300px;
width: 300px;
background-color: white;
border-radius: 4px;
display: inline-block;
margin: 20px;
box-shadow: 0 5px 15px 1px rgb(0 0 0 / 7%);
`;

export const StyledIcon = styled.img`
height: 300px;
width: 300px;
float: center;


`;

export const StyledTitle = styled.div`
font-size: 24px;
text-transform: uppercase;
color: #0077D9;
margin-bottom: 15px;
`;

export const StyledLabel = styled.div`
width: 100%;
margin-bottom: 10px;
color: #3B4455;
`;

export const StyledDocSearchBar = styled.div`
width: 100%;
height: 70px;
`;
export const StyledSearchBox = styled.div`
/* display: inline-block; */
float: right;
width: 50%;
`;
export const StyledSearchIcon = styled.img`
position: absolute;
    right: 20px;
    width: 35px;
    height: 35px;
    margin-top: 20px;
`;
export const StyledDocTileContainer = styled.div`
width: 100%;
`;
export const StyledDocHeader = styled.div`
width: auto;
height: 100px;
padding: 45px 0 30px 0;
background-color: #F5F5F6;
`;

export const StyledSpan = styled.span`
font-size: 14px;
color: #0077D9;
display: block;
margin-top: 20px;
`;
export const FoodCourt = () => {
	
	  const path=['/foodpayment']
	const images= [
		Food1,Food2,
		Food3
	      ]
	return (
			<div className="slideshow-container">
		      <StyledDocTileContainer>
		      {images.map((infoObj,index) => (
		          <StyledDocTile className='hp-doctile'>
		          <Route render={({ history}) => (
		             <button type="button" onClick={() => { history.push(path[index]) }}>
		              <StyledIcon src={infoObj} alt='' />
		              <p><div><b>£15</b></div><div><b>Order now</b></div></p>
		            	  </button>)}/>
		          </StyledDocTile>
		      ))}
		  </StyledDocTileContainer>
		        
		        
		      </div>
		    );
		   
		  }
		

export default withContext(FoodCourt);