package com.revature.threads;

public class SynchronizedResource {
//a simulation of some long running resource
	
	synchronized void slowMethod() {
		System.out.println(Thread.currentThread().getName() + " started Resource process");
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(Thread.currentThread().getName() + " ended Resource process");
	}
	
}
