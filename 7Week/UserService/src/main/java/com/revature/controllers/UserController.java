package com.revature.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.User;

@RestController
@RequestMapping("users")
public class UserController {

	@GetMapping
	public User getAllUser() {
		return new User("Alec", "Pisces");
	}
	
	
}
