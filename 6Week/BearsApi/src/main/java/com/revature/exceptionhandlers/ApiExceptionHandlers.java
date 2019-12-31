package com.revature.exceptionhandlers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.revature.exceptions.UnauthorizedException;

@ControllerAdvice//for handling exceptions in controllers
public class ApiExceptionHandlers {
	
	
	@ExceptionHandler(value = {UnauthorizedException.class})
	public ResponseEntity<Object> unauthorizedBear(UnauthorizedException e){
		System.out.println(e);
		return new ResponseEntity<Object>(e.getResponseMessage(), e.getStatus());
	}
	

	@ExceptionHandler(value = {Throwable.class})
	public ResponseEntity<Object> catchAll(Throwable e){
		System.out.println(e);
		return new ResponseEntity<Object>("Something Went Wrong", HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
