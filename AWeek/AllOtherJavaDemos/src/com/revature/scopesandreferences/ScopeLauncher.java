package com.revature.scopesandreferences;

public class ScopeLauncher {
	
	static String x = "This is a class variable";
	
	//Let me get back to you on this
	//String x;
	
	public static void main(String[] args) {
		System.out.println(x);
		//this below, will be used before the class var x
		//because its scope is smaller
		//String x = "this is a local variable";
		//System.out.println(x);
		if(true) {
			String x = "even localaler";
			System.out.println(x);
		}
		String x;
		
		int i = 0;
		int number = i;
		number++;
		System.out.println(i);
		System.out.println(number);
		Reference.intIncrement(i);
		System.out.println(i);//We expect this to be 0
		
		Reference r = new Reference();
		System.out.println(r);
		Reference.increment(r);
		System.out.println(r.size);//We expect this to be 
		
		
		
		
		
	}
	
	//is method scoped 
	static String doSomething(String x){
		
		for(int i = 0; i < 0; i++) {
			String y = "this";
		}
		int i;
		for(i = 0; i< 0; i++) {
			String y = "that";
		}
		
		return x;
	}
	

}
