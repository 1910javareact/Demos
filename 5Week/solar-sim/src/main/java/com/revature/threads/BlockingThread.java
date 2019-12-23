package com.revature.threads;

public class BlockingThread implements Runnable{

	SynchronizedResource s1;
	SynchronizedResource s2;
	
		public BlockingThread(SynchronizedResource s1, SynchronizedResource s2) {
			// TODO Auto-generated constructor stub
			this.s1 = s1;
			this.s2 = s2;
		}

		@Override
		public void run() {
			// TODO Auto-generated method stub
			System.out.println(Thread.currentThread().getName() + " is trying to do work");
			s1.slowMethod();
			s2.slowMethod();
			System.out.println(Thread.currentThread().getName() + " is finished doing work");
		}
		
		
}
