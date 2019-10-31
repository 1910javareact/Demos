package com.revature.arrays;

import com.revature.inheritance.Plant;//this a specific class
import com.revature.inheritance.*;//all classes in the package

/** 
 * this is the singleton design pattern
 * we use a private constructor alongside a 
 * public static reference to an instance of the object
 * this way, only a single copy of the object can 
 * ever be in existence
 **/
public class Garden {

	public static Garden theGarden = new Garden();
	
	private Plant[] plots = new Plant[50];
	
	private Garden(){
		
	}
	
	public void addPlant(Plant newPlant) {
		for(int i = 0; i < plots.length; i++) {
			if(plots[i] == null) {
				plots[i] = newPlant;
				break;
			}
		}
	}
	
	@Override
	public String toString() {
		String returnValue = "[ ";
		//this is an enhanced for loop
		//we give an object declaration on the left
		//something that we can loop through on the right
		//our only valid loop targets are Iterables
		//Iterable means implementing the Iterabale interface
		//and arrays
		for(Plant p : plots) {
			if(p == null) {
				returnValue += " " + "null" + ", ";
			}else {
				returnValue = returnValue.concat(" " + p.toString() + ", ");
			}
			
		}
		returnValue = returnValue.concat(" ]");
		return returnValue;
	}
	
}
