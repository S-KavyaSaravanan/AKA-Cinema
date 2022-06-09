import React, { useEffect, useState } from "react"
import styled from 'styled-components';
import numberofseats from './images/numberofseats.png';
import { Button } from './controls';
import { useHistory } from "react-router-dom";


export  const NumberOfSeatSelection2 = () => {
	const [category] = useState([]);
	
	const history = useHistory();
    const BookingNavigation = () => {
		  history.push("/booking2");
		}
    const handleOnChange=(key, e)=> {
        console.log(e.target.value);
        let post = this.state.post;
        post[key] = e.target.value; // key variable can be a string
        console.log(this.state);
      }
       return (
			  <>
			  <StyledDocTileContainer>
			 <StyledDocTile className='hp-doctile'>
			 <StyledHeader>
             Select Number Of Seats
         </StyledHeader>
	                   <StyledIcon src={numberofseats} alt='' />
	                	   <div>
	                   <select>
	                     <option value="1">1</option>
	                     <option value="2">2</option>
	                     <option value="3">3</option>
	                     <option value="4">4</option>
	                     <option value="5">5</option>
	                     <option value="6">6</option>
	                     <option value="7">7</option>
	                     <option value="8">8</option>
	                     <option value="9">9</option>
	                     <option value="9">10</option>
	                   </select>
	                   <button
		               className="button" style = {{color:'#FFA500',backgroundColor: '#000000',marginTop:'10px'}} onClick={BookingNavigation}
		             >
		               Contiune
		             </button>
	                 </div>
	               </StyledDocTile>
	                   
	          </StyledDocTileContainer>
	          

	          </>
	  );
	}


export const StyledDocTile = styled.div`
height: 400px;
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