package com.revature.sort;

import java.util.stream.IntStream;

public class BubbleSort {
	
	// O(n^2)
	public static void sort(int[] arr) {
		for(int i = 0; i < arr.length - 1; i++) {
			for(int j = 1; j < arr.length - i; j++) {
				if(arr[j - 1] > arr[j]) {
					int temp = arr[j];
					arr[j] = arr[j - 1];
					arr[j - 1] = temp;
				}
			}
		}
	}
	
	public static void sort2(int[] arr) {
		// Loop through array, for each element, except for last
		for(int i = 0; i < arr.length - 1; i++) {
			// This is the index of the largest element found so far
			int max = 0;
			
			// Loop through array, looking for largest element
			for(int j = 0; j < arr.length - i; j++) {
				
				// if a new max value is found
				if(arr[max] < arr[j]) {
					max = j;
				}
			}
			
			// Once loop is over, max value is found
			
			// Swap max with last element excluding i
			
			// ith to last element
			int temp = arr[arr.length - 1 - i];
			arr[arr.length - 1 - i] = arr[max];
			arr[max] = temp;
		}
	}
	
	public static void sortfunctional(int[] arr) {
		
		IntStream.range(0, arr.length - 1)
			.flatMap(i -> IntStream.range(1, arr.length - i))
			.forEach(j -> {
				if(arr[j - 1] > arr[j]) {
					int temp = arr[j];
					arr[j] = arr[j - 1];
					arr[j - 1] = temp;
				}
			});
	}
}
