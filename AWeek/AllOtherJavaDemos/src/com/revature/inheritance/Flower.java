package com.revature.inheritance;

public class Flower extends Plant{

	String name;
	
	int prettiness;
	
	Flower(int size, String description, String color, String climate, String name, int prettiness){
		super(size, description, color, climate);
		this.name = name;
		this.prettiness = prettiness;
	}
	
	@Override
	public String grow() {
		// TODO Auto-generated method stub
		return "The flower will bloom in summer";
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString() + " name: " + this.name + " prettiness: " + this.prettiness;
	}
}
