package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Cat;
import com.revature.models.User;
import com.revature.remote.UserClient;

@RestController
@RequestMapping("cats")
public class CatController {

	
	@Autowired
	private UserClient uc;
	
	@GetMapping
	public ResponseEntity<Cat> getAllCat() {
		User u = uc.getAllUser();
		if(u == null) {
			return new ResponseEntity<Cat>(new Cat("Pipi", u), HttpStatus.PARTIAL_CONTENT);
		} else {
			return new ResponseEntity<Cat>(new Cat("Pipi", u), HttpStatus.OK);
		}
		
	}
}
