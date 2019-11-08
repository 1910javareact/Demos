package com.revature.sort;

public class QuickSort {
	
	public static void sort(int[] arr) {
		if(arr == null || arr.length == 0) {
			return;
		}
		quicksort(arr, 0, arr.length - 1);
	}
	
	private static void quicksort(int[] arr, int begin, int end) {
		int pivot = arr[(end + begin) / 2];
		
		int i = begin;
		int j = end;
		
		while(i <= j) {
			
			while(arr[i] < pivot) {
				i++;
			}
			
			while(arr[j] > pivot) {
				j--;
			}
			
			if(i <= j) {
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
				i++;
				j--;
			}
			
			if(begin < j) {
				quicksort(arr, begin, j);
			}
			
			if(end > i) {
				quicksort(arr, i, end);
			}
		}
	}
}
