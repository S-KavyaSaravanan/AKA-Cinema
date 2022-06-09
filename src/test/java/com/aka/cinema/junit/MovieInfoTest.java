package com.aka.cinema.junit;

import java.net.URI;
import java.net.URISyntaxException;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.aka.cinema.service.MovieService;


public class MovieInfoTest 
{
	@InjectMocks
	MovieService movieService;

	

	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
	}

     
    @Test
    public void testGetMovieListSuccess()
    {
    	JSONObject json = new JSONObject();
    	JSONArray array = new JSONArray();
    	JSONObject item = new JSONObject();
    	item.put("Name", "World of Warship");
    	item.put("Ticketprice","£14.99");
    	item.put("Screen", "1");
    	item.put("showtimes", "10:45am,2:00pm,5:00pm,9:00pm");
    	JSONObject item1 = new JSONObject();
    	item1.put("Name", "JurasicWorld");
    	item1.put("Ticketprice","£14.99");
    	item1.put("Screen", "2");
    	item1.put("showtimes", "10:45am,2:00pm,5:00pm,9:00pm");
    	JSONObject item2 = new JSONObject();
    	item2.put("Name", "Avatar");
    	item2.put("Ticketprice","£14.99");
    	item2.put("Screen", "2");
    	item1.put("showtimes", "10:45am,2:00pm,5:00pm,9:00pm");
    	array.put(item);
    	array.put(item1);
    	array.put(item2);
    	json.put("moviedetails",array);
      Assert.assertEquals(true, movieService.fetchMovieDetails().has("moviedetails"));
    } 
   
}
