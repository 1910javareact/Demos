package com.revature.exceptions;

import org.springframework.http.HttpStatus;

public class UnauthorizedException extends AbstractApiException{
	
	public UnauthorizedException() {
		super(HttpStatus.UNAUTHORIZED, "You are unauthorized for this endpoint");
	}

}
