import React, { useEffect, useState } from "react"
import styled from 'styled-components';
import orderimage from './images/ticketImage1.jpg';
import { Button } from './controls';
import { useHistory } from "react-router-dom";
import FoodOrderImage from './images/FoodOrderImage.jpg';


export  const FoodOrderSuccess = () => {
	const [randomNumber, setRandom] = useState();
	const random = () => {
	    setRandom(() => {
	      return Math.floor(Math.random() * 100)*124;
	    });
	}
	const history = useHistory();
    const HomeNavigation = () => {
		  history.push("/");
		}
	
	useEffect(() => {
		random()
	  }, [])
      return (
			  <>
			  <StyledDocTileContainer>
			 <StyledDocTile className='hp-doctile'>
			 <StyledHeader>
             Food Order Placed
         </StyledHeader>
	                   <StyledIcon src={FoodOrderImage} alt='' />
	                 
	                   
	               </StyledDocTile>
	                   
	          </StyledDocTileContainer>
	          <div className="field is-clearfix">
	             <button
	               className="button" style = {{color:'#FFA500',backgroundColor: '#000000'}} onClick={HomeNavigation}
	             >
	               Return Back To Home
	             </button>
	               </div>

	          </>
	  );
	}


export const StyledDocTile = styled.div`
height: 300px;
width: 300px;
background-color: #FFFFFF;
border-radius: 10px;
display: inline-block;
margin: 20px;
box-shadow: 0 5px 15px 1px rgb(0 0 0 / 7%);
borderWidth: 40,
borderColor: red,
`;

export const StyledIcon = styled.img`
height: 170px;
width: 170px;
float: center;

`;

export const StyledLabel = styled.div`
font-size: 18px;
width: 100%;
margin-bottom: 10px;
color: #FFA500;
`;

export const StyledTitle = styled.div`
font-size: 20px;
text-transform: uppercase;
color: #FFA500;
margin-bottom: 15px;
`;

export const StyledHeader = styled.div`
font-size: 25px;
color: #FFA500;
margin-bottom: 15px;
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
backgroundColor: #000000
`;
export const StyledDocHeader = styled.div`
width: auto;
height: 100px;
padding: 45px 0 30px 0;
background-color: white;
`;