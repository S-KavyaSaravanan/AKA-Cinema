import React, { Component } from "react";    
import './Registration.css'   
import withContext from "../withContext";
import axios from 'axios';
    
class Register extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            student_email: '',    
            first_name: '',    
            last_name: '',    
            ppassword: '',    
            student_address: '',    
            student_postcode: '',    
            formErrors: {},  
        loggedIn:false
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { fullName, username,emailaddress,password,mobilenumber} = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        
            //Email    
        if (!fullName) {    
            formIsValid = false;    
            formErrors["fullNameErr"] = "Full Name is required";    
        }    
       
        //Student name     
        if (!username) {    
            formIsValid = false;    
            formErrors["usernameErr"] = "User Name is required.";    
        }    
     
        if (!emailaddress) {    
            formIsValid = false;    
            formErrors["emailErr"] = "Email Id is required.";    
        }    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailaddress))) {    
        	formIsValid = false;    
            formErrors["emailErr"] = "Invalid email id.";    
        }     
    
        //Password
        if(!password){
            formIsValid = false;    
            formErrors["passwordErr"] = "Password is required.";    
        
    }
        if(!mobilenumber){
            formIsValid = false;    
            formErrors["mobilenumberErr"] = "mobilenumber is required.";    
        
    }
    
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
        		      'http://localhost:8083/register',
        		      JSON.stringify({fullName:this.state.fullName, username:this.state.username,emailaddress:this.state.emailaddress,password:this.state.password,mobilenumber:this.state.mobilenumber}),
        		      {
        		    	  headers: {
        		    	    // Overwrite Axios's automatically set Content-Type
        		    	    'Content-Type': 'application/json'
        		    	  }
        		      }).catch((res) => {
        		      return { status: 400, message: 'bad request' }
        		    })

        		    if(res.status === 200) {
        		     alert("Registration successfull")
        		    } 
          this.state.loggedIn=true;
        		  }   
              
        }    
       
    
    render() {    
    
        const { fullNameErr, usernameErr,emailErr,passwordErr,mobilenumberErr } = this.state.formErrors;  
        return (    
            <div className="formDiv">    
                <h1 style={{ textAlign: "center",color: '#FFA500',marginTop: '-20px',fontSize: '20px'}} ><b>Create new Account </b></ h1>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                       <label  className="label" style={{ textAlign: "left",marginLeft: '180px',marginTop: '-10px' }}></label>    
                            <input type="text" name="fullName"    
                                value={this.state.fullName}    
                                onChange={this.handleChange}    
                                placeholder="Full name"    
                                className={fullNameErr ? ' showError' : 'showError'} />    
                            {     
                                <div style={{ color: "red",fontSize: "15px", paddingBottom: 10 }}>{fullNameErr}</div>    
                            }    
    
                           
                            <label className="label" style={{ textAlign: "left",marginLeft: '180px' }}></label>    
                            <input type="text" name="username"    
                                value={this.state.username}    
                                onChange={this.handleChange}    
                                placeholder="User name"    
                                className={usernameErr ? ' showError' : ''} />    
                            {usernameErr &&    
                                <div style={{ color: "red",fontSize: "15px", paddingBottom: 10 }}>{usernameErr}</div>    
                            }    
    
                       
                            <label  className="label" style={{ textAlign: "left",marginLeft: '180px' }}></label>    
                            <input type="text" name="emailaddress"    
                                value={this.state.emailaddress}    
                                onChange={this.handleChange}    
                                placeholder="Email address"    
                                className={emailErr ? ' showError' : ''} />    
                            {emailErr &&    
                                <div style={{ color: "red",fontSize: "15px", paddingBottom: 10 }}>{emailErr}</div>    
                            }    
    
                           
                            <label  className="label" style={{ textAlign: "left",marginLeft: '180px' }}></label>    
                            <input type="text" name="password"    
                                value={this.state.password}    
                                onChange={this.handleChange}    
                                placeholder="Password.."    
                                className={passwordErr ? ' showError' : ''} />    
                            {passwordErr &&    
                                <div style={{ color: "red",fontSize: "15px", paddingBottom: 10 }}>{passwordErr}</div>    
                            }    
    
                         
                            <label  className="label" style={{ textAlign: "left",marginLeft: '180px' }}></label>    
                            <input type="text" name="mobilenumber"    
                                value={this.state.mobilenumber}    
                                onChange={this.handleChange}    
                                placeholder="Mobile Phone"    
                                className={mobilenumberErr ? ' showError' : ''} />    
                            {mobilenumberErr &&    
                                <div style={{ color: "red",fontSize: "15px", paddingBottom: 10 }}>{mobilenumberErr}</div>    
                            }    
                           <div>
                            <button type="submit"
                            className="button" style = {{color:'#FFA500',backgroundColor: '#000000'}}
                          >
                            Register
                          </button>  {this.state.loggedIn && <p style={{color:'#12AD2B'}}> Registeration is successfull</p>} 
                            </div>
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default withContext(Register);