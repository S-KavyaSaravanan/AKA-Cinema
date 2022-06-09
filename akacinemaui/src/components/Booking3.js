
import './styles3.css'
import React, { useState } from 'react'
import clsx from 'clsx'
import withContext from "../withContext";
import { useHistory } from "react-router-dom";
import moment from 'moment';
import Calendar from 'react-calendar';
import styled from 'styled-components';
const CalendarContainer = styled.div`
max-width: 250px;
  margin: auto-left;
  margin-top: -30px;
  background-color: #000000;
  padding: 10px;
  border-radius: 30px;
  
/* ~~~ navigation styles ~~~ */
.react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: 300;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  } 

/* ~~~ label styles ~~~ */
.react-calendar__month-view__weekdays {
    text-align: right;
  }
/* ~~~ button styles ~~~ */
button {
    margin: 3px;
    background-color: black;
    border: 0;
    border-radius: 3px;
    color: #FFA500;
    padding: 5px 0;

    &:hover {
      background-color: red;
    }

    &:active {
      background-color: green;
    }
  }
/* ~~~ day grid styles ~~~ */
.react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
/* ~~~ neighboring month & weekend styles ~~~ */
.react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.60;
  }
  .react-calendar__month-view__days__day--weekend {
    color: red;
  }

/* ~~~ active day styles ~~~ */
.react-calendar__tile--range {
    box-shadow: 0 0 20px 2px black;
    color:green;
   
}
`;

		 
const movies = [
  {
    name: 'Avenger',
    price: 10,
    occupied: [],
  },
  {
    name: 'Joker',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: 'Toy story',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: 'the lion king',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
]

const seats = Array.from({ length: 10 * 5 }, (_, i) => i)

 

export  const Booking3 = () => {
	const [dateState, setDateState] = useState(new Date())
	  const changeDate = (e) => {
	    setDateState(e)
	  }
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])
  const history = useHistory();
 const paymentNavigation = () => {
	 if((localStorage.getItem('usertype')=="manager" || localStorage.getItem('usertype')=="staff" || localStorage.getItem('usertype')=="user")){
		  history.push("/payment");
		}else{
			history.push("/login");
			}
		}
  return (
    <div className="App">
    <CalendarContainer>
    <Calendar
    value={dateState}
    onChange={changeDate}
    />
    </CalendarContainer>
    <p style={{fontSize:'15px',color:'white',marginLeft:'-1000px'}}>Show time date is <span>{moment(dateState).format('MMMM Do YYYY')}</span></p>
  
      <Movies
        movie={selectedMovie}
        onChange={movie => {
          setSelectedSeats([])
          setSelectedMovie(movie)
        }}
      />
      <ShowCase />
      <p style = {{color:'#FFA500', fontSize:'30px',marginTop:'-80px'}}>show timings</p>
      <button type="submit"
          className="button"  style = {{color:'#FFA500',backgroundColor: 'white',marginTop:'-120px',marginLeft:'50px'}}
        onclick={''}>
          10:45AM
        </button>
      <button type="submit"
          className="button"  style = {{color:'#FFA500',backgroundColor: 'white',marginTop:'-120px',marginLeft:'10px'}}
        >
          2:00PM
        </button>
      <button type="submit"
          className="button"  style = {{color:'#FFA500',backgroundColor: 'white',marginTop:'-120px',marginLeft:'10px'}}
        >
          5:00PM
        </button>
      <button type="submit"
          className="button"  style = {{color:'#FFA500',backgroundColor: 'white',marginTop:'-120px',marginLeft:'10px'}}
        >
          9:00PM
        </button>
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />

      <p className="info" style = {{color:'white', marginLeft:'-20px', fontSize: '25px'}}>
        You have selected <span className="count">{selectedSeats.length}</span>{' '}
        seats
        </p>
        
        <button className="button" style = {{color:'#FFA500',backgroundColor: 'black', marginTop:'20px', marginLeft:'-30px'}} onClick={paymentNavigation} >
          <b>Pay </b>£{selectedSeats.length * selectedMovie.price}
        </button>
      
    </div>
  )
}

function Movies({ movie, onChange }) {
  
		  return (
		    <div></div>
		  )
  
}

function ShowCase() {
  return (
    <ul className="ShowCase" style={{color:'white',fontSize:'25px'}}>
      <li>
        <span className="seat" /> <small>Available</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
      
    </ul>
    
    
  )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />
    	  <div>
      </div>
      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </div>
    </div>
  )
}
export default withContext(Booking3);