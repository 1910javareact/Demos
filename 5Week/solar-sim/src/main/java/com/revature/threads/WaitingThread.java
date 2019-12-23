package com.revature.threads;

public class WaitingThread implements Runnable{
	
	private Thread toDie;
	
	public WaitingThread(Thread td) {
		// TODO Auto-generated constructor stub
		this.toDie = td;
	}
	
	public void run() {
		System.out.println("Waiting for " + this.toDie.getName() + " to Die");
		try {
			this.toDie.join();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(this.toDie.getName() + " has died, and now I shall die too");
	}
}
