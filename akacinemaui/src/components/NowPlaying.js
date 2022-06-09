import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import withContext from "../withContext";
import { MaskedTextbox, Button } from './controls';
import { useHistory } from "react-router-dom";


export const NowPlaying = () => {
	const [users, setUsers] = useState([])
	const history = useHistory();
    const Screen1Navigation = () => {
		  history.push("/screen1");
		}
    const Screen2Navigation = () => {
		  history.push("/screen2");
		}
    const Screen3Navigation = () => {
		  history.push("/screen3");
		}
    
	
return (
		 <>
             <button
               className="button" style = {{color:'green',backgroundColor: 'white',marginLeft:"55px"}} onClick={Screen1Navigation}
             > 
               Screen 1
             </button>
               <button
               className="button" style = {{color:'green',backgroundColor: 'white',marginLeft:"75px"}} onClick={Screen2Navigation}
             >
               Screen 2
             </button>
               <button
               className="button" style = {{color:'green',backgroundColor: 'white',marginLeft:"50px"}} onClick={Screen3Navigation}
             >
               Screen 3
             </button>
               
           </>  
 );
}
export default withContext(NowPlaying);