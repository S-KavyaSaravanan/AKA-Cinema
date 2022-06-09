package com.aka.cinema.Api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping(value = "/movies")
public interface MovieInfoApi {
	@RequestMapping(value = "/getmoviesInfo", produces = { "application/json" }, method = RequestMethod.GET)
	ResponseEntity<?> getMovieinfo();
}
