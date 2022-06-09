package com.aka.cinema.controller;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aka.cinema.service.AuthenticationService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthenticationController implements com.aka.cinema.Api.AutenticationApi {

	@Autowired
	AuthenticationService authService;

	@Override
	public ResponseEntity<?> login(@RequestBody String loginDetails) {
	  boolean response = false; JSONObject obj = new JSONObject(loginDetails);
	  if (null != obj) { String email = obj.optString("email"); 
	  String password =obj.optString("password"); 
	  }
	  if (response) { return new
	  ResponseEntity<Object>("User Logged in Successfully", HttpStatus.OK); }
	  return new ResponseEntity<Object>("Invalid user",
	  HttpStatus.INTERNAL_SERVER_ERROR);
	  
	  }

	@Override
	public ResponseEntity<?> logOut() { // TODO Auto-generated method
		return new ResponseEntity<Object>("LoggedOutSuccessfully", HttpStatus.OK);
	}

	@Override public ResponseEntity<?> register(@RequestBody String
	  registerdetails){
	  boolean response=false; 
	  JSONObject obj = new JSONObject(registerdetails);
	 
	  
	  
	  if (response) { return new
	  ResponseEntity<Object>("User Logged in Successfully", HttpStatus.OK); }
	  return new ResponseEntity<Object>("Unable to Login",
	  HttpStatus.INTERNAL_SERVER_ERROR);
	  
	  }
	 
	 
}
