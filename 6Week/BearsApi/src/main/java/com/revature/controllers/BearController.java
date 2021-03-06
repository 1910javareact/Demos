package com.revature.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.annotations.AuthAnno;
import com.revature.models.Bear;
import com.revature.services.BearService;

@RestController//this is a spring bean, it will have mappings for the servlet, it will never send a view
@RequestMapping("bears")
@CrossOrigin//is an annotation for doing cors on a controller level
public class BearController {

	private BearService bs;
	
	@Autowired
	public BearController(BearService bs) {
		this.bs = bs;
	}
	
	
	@GetMapping
	@AuthAnno(roles = {"Yogi"})
	public List<Bear> getAllBears(){
		return bs.getAllBears();
	}
	
	@GetMapping("{id}")
	public Bear findBearById(@PathVariable int id) {
		return bs.findBearById(id);
	}
	
	@PostMapping
	public Bear saveOneBear( @RequestBody Bear b) {
		return bs.saveOneBear(b);
	}
	
	@PostMapping("login")
	public Bear login(@RequestBody String bearName, HttpServletRequest req) {
		Bear b = bs.findBearByName(bearName);
		req.getSession().setAttribute("bear", b);
		return b;
	}
	
	
}
