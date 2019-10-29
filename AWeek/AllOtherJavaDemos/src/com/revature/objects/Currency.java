package com.revature.objects;

public class Currency {
	
	//default value is based on usd
	static double defaultValue = 10;
	//default 0.0
	//should be a multiplier of the usd
	double value;
	
	//null
	String name;
	
	//String [] denominations;
	
	//0
	long serialNumber;
	//null
	String securityLevel;
	
	public Currency() {
		
	}
	
	public Currency(long serialNumber, String name, String securityLevel, double value) {
		super();
		this.name = name;
		this.securityLevel = securityLevel;
		this.value = value;
		this.serialNumber = serialNumber;
	}
	
	public void spend() {
		System.out.println("you spent " + this.name + " currency");
		//instance methods can call static methods, because there is only one copy and there is no ambiguity about what is being called
		exchangeRate(this.name, this.value);
	}
	
	public static void exchangeRate(String name, double multiplier) {
		System.out.println("A USdollar is worth " + defaultValue/multiplier + " of your currency, " + name);
		
		//can't use this, becuase static things have no object reference
		//can't call instance methods, because static methods don;t have access to copies of instance methods
		//this.spend();
	}
	
}
