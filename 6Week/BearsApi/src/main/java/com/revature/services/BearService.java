package com.revature.services;

import java.util.List;

import com.revature.models.Bear;

public interface BearService {

	public List<Bear> getAllBears();

	public Bear findBearById(int id);

	public Bear saveOneBear(Bear b);

	public Bear findBearByName(String bearName);
	
}
