package com.revature.inheritance;

public class InheritanceLauncher {

	public static void main(String[] args) {
		Plant p1 = new Plant();
		Plant p2 = new Plant();
		
		System.out.println(p1.toString());
		System.out.println(p2.toString());
		
		//this is an example of polymorphism
		Plant c1 = new Cactus(5, "arizona", "green", "desert like places", "very");
		System.out.println(c1);
		
		System.out.println(p1.grow());//the plant is growing quickly
		System.out.println(c1.grow());
		System.out.println(((Cactus) c1).grow(0));
		Plant f1 = new Flower(2, "water monthly", "yellow", "in gardens", "yellow hibiscus", 10);
		System.out.println(f1);
		//now we can access the private field, using our getter
		System.out.println(c1.getSize());
		c1.setSize(10);
		System.out.println(c1.getSize());
		
		

	}

}
