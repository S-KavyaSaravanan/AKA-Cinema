package com.aka.cinema.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ComponentScan({ "com.aka" })
public class AkaCinemaApplication {
	public static void main(String[] args) {
		SpringApplication.run(AkaCinemaApplication.class, args);
		
	}

}
