package com.revature.primitives;

public class Primitives {

	public static void main(String[] args) {
		//this is an example of a comment
		//this is declaring and initializing a variable;
		byte myByte = 127;
		//this is declaring a variable, that means giving it a type and a name
		short myShort;
		//we don't have to give a value when we declare a variable
		
		//I can give a new value anytime I want by using the name and the = sign to assign it a value
		myShort = 6;
		
		System.out.println("myByte = " + myByte);
		System.out.println("myShort = " + myShort);
		
		//chars are numbers, but they can take single quoted characters
		char myChar = 'A';
		char myChar2 = 4;
		//4 is some weird character, that doesn't get rendered correctly
		//lets reassign to 'A'
		myChar2 = 65;
		
		System.out.println("myChar = " + myChar);
		System.out.println("myChar2 = " + myChar2);
		
		int myInt = 20000000;
		
		System.out.println("myInt = " + myInt);
		//all values will default to being ints, unless specfied otherwise or going into things smaller than an int
		long myLong = 220000000000L;
		System.out.println("myLong = " + myLong);
		
		//with decimal values, java always assumes you want to use a double, you have to use f for floats
		float myFloat = 1.0F;
		
		System.out.println("myFloat = " + myFloat);
		
		//you can specify a D for doubles, this is only really done when they are whole values
		double myDouble = 3D;
		
		System.out.println("myDouble = " + myDouble);
		
		//this can get exaclty two values, true or false
		boolean myBool = true;
		System.out.println("bool = " + myBool);
		
	}
}
