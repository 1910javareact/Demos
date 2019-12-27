package com.revature.repositories;

import java.util.List;

import com.revature.models.Bear;

public interface BearDao {

	public List<Bear> findAllBears();

	public Bear findBearById(int id);

	public Bear saveOneBear(Bear b);
	
}
