package com.revature.threads;

public class BlockingLauncher {

	
	
	public static void main(String[] args) {
		SynchronizedResource s1 = new SynchronizedResource();
		SynchronizedResource s2 = new SynchronizedResource();
		//lets make a thread that needs a thing
		Thread first = new Thread(new BlockingThread(s1, s2));
		//and another thread that needs the same thing
		Thread second = new Thread(new BlockingThread(s1, s2));
		first.setName("First");
		second.setName("Second");
		first.start();
		second.start();
		
		
		
		
		//then see what happened?
		while(true) {
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println(first.getName() + " state: " + first.getState());
			System.out.println(second.getName() + " state: " + second.getState());
		}
	}
}
