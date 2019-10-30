package com.revature.inheritance;

public class Cactus extends Plant{
	
	String thornyness;
	
	Cactus(){
		super();//this super is going to call the default Plant constructor
	}
	
	Cactus(int size, String description, String color, String climate, String thornyness){
		super(size, description, color, climate);//calls the plan constructor with some values
		this.thornyness = thornyness;//sets the cactus value
	}
	
	@Override
	public String toString() {
		return super.toString() + " thornyness: " + this.thornyness;
	}
	
	@Override//this is an annotation
	//overriding is the same signature as a parent method, but a different implementation
	public String grow() {
		
		return "the plant is growing slowly";
	}
	//overloading, same method name, different method params
	public String grow(int waterAmount) {
		return "Don't water me too much, I'll die";
	}

}
