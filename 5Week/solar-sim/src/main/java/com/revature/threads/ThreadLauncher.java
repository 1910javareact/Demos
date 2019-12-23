package com.revature.threads;

public class ThreadLauncher {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//make a thread by extending thread
		Thread ext = new ExtensibleThread(); 
		//make a thread with a runnable
		Thread run = new Thread(new RunnableThread());
		//make a thread using an arrow to replace functional interface runnable
		Thread arrow = new Thread(()->{
			while(true) {
				System.out.println("I am the arrow thread");
			}
		});
		
		ext.start();
		run.start();
		arrow.start();	
		while(true) {
			System.out.println("I am the main thread");
		}

	}

}
