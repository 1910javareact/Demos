package com.revature.strings;

public class StringLauncher {
	
	public static void main(String[] args) {
		String s1 = "Spooky";
		String s2 = "Hocus; Pocus";
		
		String s3 = "Spooky";
		
		//this is an example of the string pool at work
		if(s1 == s3) {
			//the two strings have the same address which means they
			//point to the same object
			//String Pool!!
			System.out.println(s1 + " == " + s3);
		} else {
			System.out.println(s1 + " != " + s3);
		}
		
		String s4 = "Spo" + "oky";//concat string literals are also in the string pool
		
		if(s1 == s4) {
			System.out.println(s1 + " == " + s4);
		}else {
			System.out.println(s1 + " != " + s4);
		}
		
		String s5 = "Spo";
		String s6 = "oky";
		String s7 = s5 + s6;
		if(s1 == s7) {
			System.out.println(s1 + " == " + s7);
		}else {
			System.out.println(s1 + " != " + s7);
		}
		System.out.println(s1.equals(s7));//will always work no matter what
		
		s7 = s7.intern();//a guarantee after being run, the string is in the pool
		if(s1 == s7) {
			System.out.println(s1 + " == " + s7);
		}else {
			System.out.println(s1 + " != " + s7);
		}
		
		System.out.println(s7.charAt(0));
		
		//this will give a stringIndexOutOfBounds
		//System.out.println(s7.charAt(10));
		for(int i = 0; i < s7.length(); i++) {
			System.out.println(s7.charAt(i));
		}
		s7 = s7.concat(" ").concat(s2).concat(" ").concat(s7);
		
		System.out.println(s7.toCharArray());
		s7.contains("oo");
		
	}

}
