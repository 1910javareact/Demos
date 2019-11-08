package com.revature;

import java.util.Arrays;
import java.util.Random;

import com.revature.sort.BubbleSort;
import com.revature.sort.MergeSort;
import com.revature.sort.QuickSort;

public class Driver {
	
	private static final int AMOUNT = 100000;

	public static void main(String[] args) {
		int[] arr = new int[AMOUNT];
		
		Random r = new Random(System.currentTimeMillis());
		for(int i = 0; i < AMOUNT; i++) {
			arr[i] = r.nextInt(AMOUNT);
		}
		
		long t1 = System.nanoTime();
//		MergeSort.sort(arr);
//		BubbleSort.sortfunctional(arr);
		BubbleSort.sort2(arr);
//		QuickSort.sort(arr);
//		Arrays.parallelSort(arr);
		long t2 = System.nanoTime();
		
		long customTime = t2 - t1;
		System.out.println(Arrays.toString(arr));
		System.out.println("It took our algorithm " + customTime + " ns to sort");
	}
}
