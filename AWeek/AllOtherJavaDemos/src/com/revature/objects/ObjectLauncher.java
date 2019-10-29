package com.revature.objects;

public class ObjectLauncher {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Currency usd = new Currency();
		usd.name = "Dollar";
		usd.securityLevel = "Pretty Secure";
		usd.serialNumber = 0;
		usd.value = 1;
		
		Currency peso = new Currency(0, "Peso", "Even more secure than the dollar", .05 * Currency.defaultValue);
		
		System.out.println(usd.name + " " + usd.securityLevel + " " + usd.serialNumber + " " + usd.value);
		System.out.println(peso.name + " " + peso.securityLevel + " " + peso.serialNumber + " " + peso.value);

		usd.spend();
		peso.spend();
		Currency.exchangeRate(peso.name, peso.value);
	}

}
