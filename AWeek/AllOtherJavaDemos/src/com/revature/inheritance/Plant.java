package com.revature.inheritance;

//I don't need to write extends object, it is implicit
public class Plant extends Object {
	
	private int size;
	
	private String description;
	
	private String color;
	
	private String climate;
	
	Plant(){
		super();//this is making an object because plant is a plant and an object
	}
	
	Plant(int size, String description, String color, String climate){
		this.size = size;
		this.description = description;
		this.color = color;
		this.climate = climate;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "size: " + this.size + " description: " + this.description + " color: " + this.color + " climate: " + this.climate;
	}
	
	public String grow() {
		return "The plant is growing quickly";
	}
	
	public int getSize() {
		return this.size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	
}
