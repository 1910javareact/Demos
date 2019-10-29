package com.revature.flowcontrol;

public class FlowControlLauncher {

	public static void main(String[] args) {
		
		String x = "Hello Kitty!";
		
		
		for(int i = 0; i < 10;) {
			//System.out.println(x + ' ' + i);
			//i++;
			
			System.out.println(i + " before if");
			//this will be true when i is 5, and immediately after, i will be 6
			if(i++ == 5) {
				System.out.println(i + " after if");
			}
		}
		
		for(int i = 0; i < 10; i++) {
			//System.out.println(x + ' ' + i);
			//i++;
			
			System.out.println(i + " before if");
			//this will be true when i is 5, and immediately after, i will be 6
			if(++i == 5) {
				System.out.println(i + " after if");
			}
		}
		int i = 2;
		//switches works for all primitives and strings, no other objects
		switch (i) {
		//don't forget your break statements, otherwise code becomes hard to understand
			case 0:{
				System.out.println("i is 0");
			}
			case 1:{
				System.out.println("i is 1");
			}
			case 2:{
				System.out.println("i is 2");
			}
			case 3:{
				System.out.println("i is 3");
				break;
			}
			case 4:{
				System.out.println("i is 4");
			}
			
			default:{
				System.out.println("i is not 0");
				break;
			}
		}
		int j = 0;
		do {
			System.out.println("This is an infinte loop");
			if(j == 100) {
				break;
			}else {
				j++;
			}	
		}while(true);
		
		//if you use a variable, you wont get any dead code, if you use literal booleans you can
		boolean t = true;
		boolean f = false;
		if(t) {
			if(false) {
				
			}
		}else {
			System.out.println("else outer");
		}
		
		if((!(t && t) || (t || f)) && ((t && f) || (f || f))) {
			System.out.println("True");
		}else {
			System.out.println("False");
		}
		
	}

}
