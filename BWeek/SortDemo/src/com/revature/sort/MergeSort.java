package com.revature.sort;

public class MergeSort {
	
	// O(n * log n) between O(n) and O(n^2)
	public static void sort(int[] arr) {
		
		// Base case
		// If there is only 0 or 1 element, the array is already sorted
		if (arr.length < 2) {
			// Quit early
			return;
		}

		// calculate middle
		int mid = arr.length / 2;
		int[] l = new int[mid];
		int[] r = new int[arr.length - mid];

		// Copy elements
		for (int i = 0; i < mid; i++) {
			l[i] = arr[i];
		}
		
		for (int i = mid; i < arr.length; i++) {
			r[i - mid] = arr[i];
		}

		sort(l);
		sort(r);

		merge(arr, l, r);
	}

	private static void merge(int[] arr, int[] left, int[] right) {
		int i = 0;
		int j = 0;
		int k = 0;

		// While there are still values left to merge
		while (i < left.length && j < right.length) {
			
			// If the left value is smaller
			if (left[i] <= right[j]) {
				// Copy the left value
				arr[k] = left[i];
				i++;
				k++;
			} else {
				// Otherwise, copy the right value
				arr[k] = right[j];
				k++;
				j++;
			}
		}
		
		// If the left array still has values
		while(i < left.length) {
			// copy them
			arr[k++] = left[i++];
		}
		
		// If the right array still has values
		while(j < right.length) {
			// copy them
			arr[k++] = right[j++];
		}
	}
}
