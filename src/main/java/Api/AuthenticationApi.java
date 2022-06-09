package com.aka.cinema.Api;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

public interface AutenticationApi {
	
	
	  @RequestMapping(value = "/login", consumes="application/json", produces = {
	  "application/json" }, method = RequestMethod.POST) ResponseEntity<?>
	  login(@RequestBody String loginDetails);
	  
	  @RequestMapping(value = "/register", consumes="application/json", produces =
	  { "application/json" }, method = RequestMethod.POST) ResponseEntity<?>
	  register(@RequestBody String registerdetails);
	  
	  @RequestMapping(value = "/logout", consumes="application/json", produces = {
	  "application/json" }, method = RequestMethod.GET) ResponseEntity<?> logOut();
	 
	 
}
