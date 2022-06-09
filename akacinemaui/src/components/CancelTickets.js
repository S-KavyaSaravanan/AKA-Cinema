import React, { Component } from "react";    
import './Login.css'   
import withContext from "../withContext";
import axios from 'axios';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import  ScrollBar   from './ScrollBar';
import { Redirect } from 'react-router'
class CancelTickets extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
           bookingid: '',    
           comments: '',    
           formErrors: {} ,
           loggedIn:false
        };    
    
        this.initialState = this.state;    
        
    }    
     
    handleFormValidation() {    
        const { bookingid,comments} = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        
    
        //Email    
        if (!bookingid) {    
            formIsValid = false;    
            formErrors["bookingidErr"] = "bookingid id is required.";    
        }    
        
       
    
        //Password
        
       this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = async(e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
        	const res= await axios.post(
        		      'http://localhost:8083/login',
        		      JSON.stringify({ bookingid:this.state.bookingid,comments:this.state.comments}),
        		      {
        		    	  headers: {
        		    	    // Overwrite Axios's automatically set Content-Type
        		    	    'Content-Type': 'application/json'
        		    	  }
        		      }).catch((res) => {
        		      return { status: 400, message: 'bad request' }
        		    })
        	

        	this.state.loggedIn=true;  
        		  }   
        
        localStorage.setItem('usertype', "user");
             
        }    
       
    
    render() {    
    
        const { bookingidErr,passwordErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h1 style={{ textAlign: "center",fontSize:"50px",marginTop: '-20px',color: '#FFA500'}} ><b> Ticket Cancellation </b></ h1>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                         
                            <label  className="label" style={{ textAlign: "left",marginLeft: '420px',backgroundColor: '#000000' }}></label>    
                            <input type="text1" name="bookingid"    
                                value={this.state.bookingid}    
                                onChange={this.handleChange}    
                                placeholder="bookingid"    
                                className={bookingidErr ? ' showError' : ''} />    
                            { bookingidErr&&    
                                <div style={{ color: "red",fontSize:"15px", paddingBottom: 10 }}>{bookingidErr}</div>    
                            }    
                          
                            <div className="field is-clearfix">
                            <button type="submit"
                              className="button"  style = {{color:'#FFA500',backgroundColor: '#000000',marginTop:'10px'}}
                            >
                              Cancel ticket
                            </button>
                              
                
                          </div>
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default withContext(CancelTickets);