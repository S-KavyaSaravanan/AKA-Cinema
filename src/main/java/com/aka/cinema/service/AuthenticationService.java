package com.aka.cinema.service;

import java.util.Base64.Encoder;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lhm.secondhandstore.model.StudentEntity;
import com.lhm.secondhandstore.repository.StudentRepository;

@Service
public class AuthenticationService {
	
   
	public boolean isValidUser(String email, String passWord) {
		
			return true;
		}
		
	}

	

