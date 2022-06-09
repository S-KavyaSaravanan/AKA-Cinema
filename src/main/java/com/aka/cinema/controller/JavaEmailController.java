package com.aka.cinema.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.aka.cinema.Api.JavaEmailApi;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class JavaEmailController implements JavaEmailApi {
	
	@Autowired
	private JavaMailSender javaMailSender;
			
	
public String sendEmail() {
   System.out.println("manju");
    SimpleMailMessage msg = new SimpleMailMessage();
    msg.setTo("manjunathreddy675@gmail.com");
    msg.setSubject("Testing from Spring Boot");
    msg.setText("Hello World \n Spring Boot Email");
javaMailSender.send(msg);
return "manju";
}
}
