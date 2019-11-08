package com.revature;

import MyArithmeticException.MyArithmeticException;

public class Driver {

	public static void main(String[] args) {
		try {
			throwChecked();
		} catch(Exception e) {
			System.out.println("Exception caught!");
//			e.printStackTrace();
		} finally {
			System.out.println("In finally block!");
		}
		
		throwUnchecked();
		
		try {
			System.out.println(1 / 0);
			System.out.println("After ArithmeticException...");
		} catch(ArithmeticException e) {
			System.out.println("In catch-block");
//			return;
		} finally {
			System.out.println("In finally-block");
		}
		
		System.out.println(someMethod());
		
		// This is possible, but not recommended to catch Errors
		try {
			recur();
		} catch(StackOverflowError e) {
			System.out.println("Error occured!");
		}
	}
	
	public static void throwChecked() throws Exception {
		throw new Exception();
	}
	
	public static void throwUnchecked() throws MyArithmeticException {
		throw new MyArithmeticException();
	}
	
	public static int someMethod() {
		try {
			System.out.println(1 / 0);
		} catch(ArithmeticException e) {
			return -1;
		} finally {
			return 1;
		}
	}
	
	public static void recur() {
		recur();
	}
}
