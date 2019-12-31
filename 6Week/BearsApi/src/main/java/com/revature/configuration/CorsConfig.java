package com.revature.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer{

	 @Override//this is cors for an application level
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/**") // all endpoints in the api
	            .allowedOrigins("http://localhost:1234", "http://localhost:3000") // allow this origin
	            .allowedMethods("PUT", "DELETE", "GET", "OPTIONS", "POST", "PATCH")
	            .allowedHeaders("header1", "Content-Type", "Authorization")
//	            .exposedHeaders("header1", "header2")
	            .allowCredentials(true);
		}
	
}
