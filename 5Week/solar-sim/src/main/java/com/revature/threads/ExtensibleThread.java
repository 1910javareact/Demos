package com.revature.threads;

public class ExtensibleThread extends Thread{

	@Override
	public void run() {
		while(true) {
			System.out.println("I am the extensible thread!");
		}
	}
	
}
