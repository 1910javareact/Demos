package com.revature.threads;

public class StateLauncher {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		//Thread for timed waiting
		Thread sleepy = new Thread(()->{
			try {
				System.out.println("Sleepy is about to take a nap");
				Thread.sleep(3000);
				System.out.println("Sleepy is waking up and ready to start the day");
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		});
		sleepy.setName("Sleepy");
		//a thread for regular waiting
		Thread killjoy = new Thread(new WaitingThread(sleepy));
		
		System.out.println("Sleepy's state: " + sleepy.getState());//state should be new
		sleepy.start();
		System.out.println("Sleepy's state: " + sleepy.getState());//state should be runnable
		
		Thread.sleep(500);//to give up the processor to other threads
		
		killjoy.start();
		System.out.println("Sleepy's state: " + sleepy.getState());//state should be timed waiting
		
		Thread.sleep(500);//to relinquish processor
		
		System.out.println("Killjoy's state: " + killjoy.getState());//state should be ???
		
		Thread.sleep(3000);
		System.out.println("Sleepy's state: " + sleepy.getState());//should be terminated
	}

}
