package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.revature.models.Bear;

public interface BearDao extends JpaRepository<Bear, Integer>{

	public Bear findByName(String name);
	
	public Bear findByTypeAndCaveType(String type, String caveType);
	
	@Query("FROM Bear")
	public Bear customMethod();
	
}
