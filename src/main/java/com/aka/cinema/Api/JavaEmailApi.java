package com.aka.cinema.Api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@RequestMapping(value = "/email")
public interface JavaEmailApi {
	@RequestMapping(value = "/triggeremail", produces = { "application/json" }, method = RequestMethod.GET)
	 String sendEmail();
		

}
