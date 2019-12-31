package com.revature.exceptions;

import org.springframework.http.HttpStatus;

public abstract class AbstractApiException extends RuntimeException {
	
	HttpStatus status;
	String responseMessage;
	
	public AbstractApiException(HttpStatus hs) {
		this.status = hs;
	}
	
	public AbstractApiException(HttpStatus hs, String message) {
		this.status = hs;
		this.responseMessage = message;
	}
	
	public HttpStatus getStatus() {
		return this.status;
	}
	
	public String getResponseMessage() {
		return this.responseMessage;
	}
	
}
