package com.aka.cinema.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MovieInfoController implements com.aka.cinema.Api.MovieInfoApi {
	@Autowired
	private com.aka.cinema.service.MovieService movieservice;

	@Override
	public ResponseEntity<?> getMovieinfo() {
		
		JSONObject movieInfoJson = movieservice.fetchMovieDetails();
		if (movieInfoJson != null) {
			return new ResponseEntity<Object>(movieInfoJson.getJSONArray("moviedetails").toString(), HttpStatus.OK);
		}
		return new ResponseEntity<Object>(movieInfoJson, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
