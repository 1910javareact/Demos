package com.revature.scopesandreferences;

public class Reference {
	int size = 0;
	
	public static void increment(Reference r) {
		System.out.println(r);
		System.out.println("Incrementing an object field");
		r.size++;
	}
	
	public static void intIncrement(int i) {
		System.out.println("incrementing a primitve value");
		i++;
	}

}
