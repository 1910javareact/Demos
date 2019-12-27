package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.Bear;
import com.revature.repositories.BearDao;

@Service
public class BearServiceImpl implements BearService{

	private BearDao bd;
	
	@Autowired
	public BearServiceImpl(BearDao bd) {
		this.bd = bd;
	}
	
	@Override
	public List<Bear> getAllBears() {
		// TODO Auto-generated method stub
		return bd.findAllBears();
	}

	@Override
	public Bear findBearById(int id) {
		// TODO Auto-generated method stub
		return bd.findBearById(id);
	}

	@Override
	public Bear saveOneBear(Bear b) {
		// TODO Auto-generated method stub
		return bd.saveOneBear(b);
	}

}
