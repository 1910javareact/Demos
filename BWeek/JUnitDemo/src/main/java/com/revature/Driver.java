package com.revature;

public class Driver {

	public static void main(String[] args) {
		Sittable thing = new Chair("Leather", "Feathery", "Mahogany", 19997.13, 1);
		
		for(int i = 0; i < 902; i++) {
			thing.sit();
		}
	}
}
