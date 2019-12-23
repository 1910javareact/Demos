package com.revature.threads;

public class RunnableThread implements Runnable {

	@Override
	public void run() {
		while(true) {
			System.out.println("I am the runnable thread");
		}
		
	}

}
