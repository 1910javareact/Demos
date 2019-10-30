package com.revature.inheritance;

/** 
 * this is the singleton design pattern
 * we use a private constructor alongside a 
 * public static refernce to an instance of the object
 * this way, only a single copy of the object can 
 * ever be in existence
 **/
public class Garden {

	public static Garden theGarden = new Garden();
	
	Plant[] garden;
	
	private Garden(){
		
	}
	
}
