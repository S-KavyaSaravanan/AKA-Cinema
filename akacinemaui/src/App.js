import React, { Component,useState } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import Login from './components/Login';
import Context from "./Context";
import Payment from './components/payment';
import Register from './components/Register';
import { Success } from './components/Success';
import  ScrollBar   from './components/ScrollBar';
import app from './App.css';
import PersonIcon from '@material-ui/icons/Person';
import DehazeIcon from '@material-ui/icons/Dehaze';
import bgimage from './components/images/blackbg.jpg';
import { Booking1 } from './components/Booking1';
import { Booking2 } from './components/Booking2';
import { Booking3 } from './components/Booking3';
import { NowPlaying } from './components/NowPlaying';
import { Screen1 } from './components/Screen1';
import { Screen2 } from './components/Screen2';
import { Screen3 } from './components/Screen3';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";
import ManagerLogin from "./components/ManagerLogin";
import StaffLogin from "./components/StaffLogin";
import { Logout } from "./components/Logout";
import  CancelTickets  from "./components/CancelTickets";
import { Offers } from "./components/Offers";
import { Playhouse } from "./components/Playhouse";
import { FoodCourt } from "./components/FoodCourt";
import { FoodPayment } from "./components/FoodPayment";
import { FoodOrderSuccess } from "./components/FoodOrderSuccess"
import { ThreeD } from "./components/ThreeD"
import { NumberOfSeatSelection1 } from "./components/NumberOfSeatSelection1"
import { NumberOfSeatSelection2 } from "./components/NumberOfSeatSelection2"
import { NumberOfSeatSelection3 } from "./components/NumberOfSeatSelection3"
import { AddPerformance } from "./components/AddPerformance"
import { DeletePerformance } from "./components/DeletePerformance"
import { ModifyPerformance } from "./components/ModifyPerformance"
import { Cart } from "./components/Cart"
const Header = styled.div`
align-items: center;
padding: 10px;
font-size: 25px;
`;

export const API_KEY = "a9118a3a";
const Container = styled.div`
display: flex;
flex-direction: column
`;
export const StyedHomeBanner = styled.img`
width: 100%;
box-shadow: 0 5px 15px 1px rgb(0 0 0 / 7%);
`;


export const StyledLogo = styled.img`
height: 90px;
width: 90px;
padding: 25px 10px 10px 20px;
float: left;
`;

export const StyledDocTile = styled.div`
height: 100px;
width: 100px;
background-color: #000000;
border-radius: 4px;
display: inline-block;
margin: 20px;
box-shadow: 0 5px 15px 1px rgb(0 0 0 / 7%);
`;

export const StyledTitle = styled.div`
font-size: 50px;
text-transform: uppercase;
color: #FFA500;
margin-bottom: 15px;
margin-left:50px
`;
export const StyledTitle1 = styled.div`
font-size: 25px;
text-transform: smallercase;
color: #FF0000;
margin-top: -30px;
margin-left:50px
`;
const SearchBox = styled.div`

`;

const SearchInput = styled.input`
background-color: #F5F5F5;
	border: 2px white;
	border-radius: 5px;
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
	font-size: 18px;
	padding: 15px;
	height: 40px;
	width: 750px;
	margin-top: 20px;
	margin-left:100px



`;
const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
gap: 25px;
justify-content: space-evenly;;
`;
const Placeholder = styled.img`
width: 120px;
height: 120px;
margin: 150px;
opacity: 50%;
`;
function  App () {
	
	const [searchQuery, updateSearchQuery] = useState("");

	  var [movieList, updateMovieList] = useState([]);
	  const [selectedMovie, onMovieSelect] = useState();

	  const [timeoutId, updateTimeoutId] = useState();
    
    
    const routerRef = React.createRef();
  
 
  
	
  
 

   const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
   updateMovieList(response.data.Search);
  };

	const myStyle={
			backgroundImage:`url(${bgimage})`,
	        height:'300vh',
	        marginTop:'0px',
	        fontSize:'50px',
	        backgroundSize: 'cover',
	        backgroundRepeat: 'no-repeat',
	    };
	const onTextChange = (e) => {
		onMovieSelect("")
	    clearTimeout(timeoutId);
	    updateSearchQuery();
	    const timeout = setTimeout(() => fetchData("Avengers"), 100);
	   updateTimeoutId(timeout);
	  };

    return (
    		<div style={myStyle} >
   <Context.Provider>
      <Router ref={routerRef}>
        <div className="App">
          
        <div className="navbar-brand">
        	<div>
        	<StyledTitle>Aka</StyledTitle>
        	<div>
            <StyledTitle1>cinemas</StyledTitle1>
            </div>
            </div>
           <Container>
           <Header>
            <SearchBox>
            <SearchInput
              placeholder="search movies"
              value={searchQuery}
              onChange={onTextChange}
            />
          </SearchBox>
            <nav>
            <div className={
                    "is-active"
                  }>
            <Link className="Link is-primary is-outlined is-pulled-center" to="/" style = {{color:'#FFA500',marginLeft: '-300px', marginTop: '1000px',fontSize: '15px', border: 0,boxShadow: 'none'
            }} >
            home
           </Link>
            <Link className="Link is-primary is-outlined is-pulled-center" to="/offers" style = {{color:'#FFA500',marginLeft: '10px', marginTop: '1000px',fontSize: '15px', border: 0,boxShadow: 'none'
            }} >
            offers
           </Link>
            <Link className="Link is-primary is-outlined is-pulled-center" to="/playhouse" style = {{color:'#FFA500',marginLeft: '10px', marginTop: '1000px',fontSize: '15px', border: 0,boxShadow: 'none'
            }} >
            play house
            </Link>
            <Link className="Link is-primary is-outlined is-pulled-center" to="/threed" style = {{color:'#FFA500',marginLeft: '10px', marginTop: '1000px',fontSize: '15px', border: 0,boxShadow: 'none'
            }} >
            4DX
            </Link>
            <Link className="Link is-primary is-outlined is-pulled-center" to="/foodcourt" style = {{color:'#FFA500',marginLeft: '10px', marginTop: '1000px',fontSize: '15px', border: 0,boxShadow: 'none'
            }} >
            food court
            </Link>
            {localStorage.getItem('usertype')=="manager" &&
            	 <Route render={({ history}) => (
                         <PopupState variant="popover" popupId="demo-popup-menu">
                         {(popupState) => (
                           <React.Fragment>
                             <Link variant="contained" type="link" color="#FFA500" className="link" {...bindTrigger(popupState)} style = {{color:'red',marginLeft: '10px', marginTop: '1000px',fontSize: '15px', border: 40,boxShadow: 'none',backgroundcolor:40
                             }}>
                             Edit Screening
                             </Link>
                            
                             <Menu {...bindMenu(popupState)}>
                               <MenuItem onClick={() => { history.push('/addperformance') }}>Add Performance</MenuItem>
                               <MenuItem onClick={() => { history.push('/deleteperformance') }}>Delete  Performance</MenuItem>
                               <MenuItem onClick={() => { history.push('/modifyperformance') }}>Modify Performance</MenuItem>
                             </Menu>
                           </React.Fragment>
                         )}
                       </PopupState>)}/>
                
            }
           
            </div>
            </nav>
          
            
            </Header>
            {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
            <MovieListContainer>
              {movieList.length ? (
                movieList.map((movie, index) => (
                  <MovieComponent
                    key={index}
                    movie={movie}
                    onMovieSelect={onMovieSelect} 
                  />
                
                ))
              ) : (
                ""
              )}
            </MovieListContainer>
            </Container>
            <Route render={({ history}) => (
                    <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <div variant="contained" type="button" color="#FFA500" className="button" {...bindTrigger(popupState)} style = {{color:'#FFA500',marginLeft: '60px', marginTop: '30px', backgroundColor: '#000000'}}>
                        <DehazeIcon />
                        </div>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={() => { history.push('/canceltickets') }}>Cancel Tickets</MenuItem>
                          <MenuItem onClick={() => { history.push('/orderfood') }}>Order Food</MenuItem>
                          <MenuItem onClick={() => { history.push('/about') }}>About</MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>)}/>
            <Route render={({ history}) => (
                    <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <div variant="contained" type="button" color="#FFA500" className="button" {...bindTrigger(popupState)} style = {{color:'#FFA500',marginLeft: '25px', marginTop: '30px', backgroundColor: '#000000'}}>
                        <PersonIcon />
                        </div>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={() => { history.push('/login') }}>User Login</MenuItem>
                          <MenuItem onClick={() => { history.push('/stafflogin') }}>Staff Login</MenuItem>
                          <MenuItem onClick={() => { history.push('/managerlogin') }}>Manager Login</MenuItem>
                          <MenuItem onClick={() => { history.push('/logout') }}>Logout</MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>)}/>
            
            
           </div>
           
  	    <Switch>
            <Route exact path="/" component={ScrollBar} />
             <Route exact path="/login" component={Login} />
              <Route exact path="/payment" component={Payment} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/booking1" component={Booking1} />
              <Route exact path="/booking2" component={Booking2} />
              <Route exact path="/booking3" component={Booking3} />
             <Route exact path="/nowplaying" component={NowPlaying} />
              <Route exact path="/screen1" component={Screen1} />
              <Route exact path="/screen2" component={Screen2} />
              <Route exact path="/screen3" component={Screen3} />
            <Route exact path="/movieinfocomponent" component={MovieInfoComponent} />
            <Route exact path="/moviecomponent" component={MovieComponent} />
            <Route exact path="/managerlogin" component={ManagerLogin} />
            <Route exact path="/stafflogin" component={StaffLogin} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/canceltickets" component={CancelTickets} />
            <Route exact path="/offers" component={Offers} />
            <Route exact path="/playhouse" component={Playhouse}/>
            <Route exact path="/foodcourt" component={FoodCourt}/>
            <Route exact path="/foodpayment" component={FoodPayment}/>
            <Route exact path="/foodordersuccess" component={FoodOrderSuccess}/>
            <Route exact path="/threed" component={ThreeD}/>
            <Route exact path="/numberofseats1" component={NumberOfSeatSelection1}/>
            <Route exact path="/numberofseats2" component={NumberOfSeatSelection2}/>
            <Route exact path="/numberofseats3" component={NumberOfSeatSelection3}/>
            <Route exact path="/addperformance" component={AddPerformance}/>
            <Route exact path="/deleteperformance" component={DeletePerformance}/>
            <Route exact path="/modifyperformance" component={ModifyPerformance}/>
            <Route exact path="/cart" component={Cart}/>
            </Switch>
          </div>
        </Router>
       </Context.Provider>
      </div>
    );
  }


export default App;
