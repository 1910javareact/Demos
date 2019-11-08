package com.revature;

public class Chair extends Furniture implements Sittable {
	
	private int timesSatUpon;
	private String owner;
	
	public Chair() {
		super();
	}
	
	public Chair(String material, String texture, String color, double price) {
		super(material, texture, color, price);
	}

	public Chair(String material, String texture, String color, double price, int timesSatUpon) {
		super(material, texture, color, price);
		this.timesSatUpon = timesSatUpon;
	}

	public int getTimesSatUpon() {
		return timesSatUpon;
	}
	
	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public boolean canSit() {
		return true;
	}

	public void sit() {
		timesSatUpon++;
		
		if(timesSatUpon < 10) {
			setPrice(getPrice() * .95);
			System.out.println("Sat on the chair. It feels less valuable.");
		} else {
			setPrice(getPrice() * .99);
			System.out.println("How worthless this chair is...So uncomfortable");
		}
		
		System.out.printf("It is now worth $%.2f\n",getPrice());
		if(getPrice() < 1) {
			throw new LowValueException("This chair is too sucky, it is only worth $" + getPrice());
		}
	}
}
