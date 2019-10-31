package com.revature.arrays;

import com.revature.inheritance.Plant;

public class ArrayLauncher {
	
	public static void main(String[] args) {
		Garden spookyEden = Garden.theGarden;
		//System.out.println(spookyEden.plots);
		System.out.println(spookyEden);
		
		//for number arrays, default is 0
		//for booleans, it is false
		//for objects it is null
//		boolean[] arr1 = new boolean[10];
//		for(boolean i : arr1) {
//			System.out.print(i + " ");
//		}
		
		Plant pumpkin = new Plant(5, "a beautiful pumpkin", "orange, with like a little yellow", "temperate");
		spookyEden.addPlant(pumpkin);
		System.out.println(spookyEden);
		Plant deadTree = new Plant (15, "rattling in the wind", "dark brown", "haunted places");
		spookyEden.addPlant(deadTree);
		System.out.println(spookyEden);
		
	}

}
