package fibonacci;

import java.util.*;

public class Driver {
	
	private static Map<Integer, Long> m = new HashMap<>();
	
	public static void main(String[] args) {
		m.put(0, 0L);
		m.put(1, 1L);
		
		for(int i = 0; i < 100000; i++) {
			System.out.println(i + ": " + fib(i));
		}
	}

	// O(2 ^ n)
	// Recursive approach
	public static long fib(int n) {
		
		// Start with base cases
		if(n < 0) {
			return -1L;
		}
		if(n == 0) {
			return 0L;
		}
		if(n == 1) {
			return 1L;
		}
		
		if(m.containsKey(n)) {
			return m.get(n);
		}
		
		// Recursive case
		long value = fib(n - 2) + fib(n - 1);
		m.put(n, value);
		return value;
	}
	
	// O(n)
	// Iterative approach
	public static long iterative(int n) {
		long fib = 1;
		long prevfib = 0;
		
		if(n < 0) {
			return -1L;
		}
		if(n == 0) {
			return 0L;
		}
		if(n == 1) {
			return 1L;
		}
		
		for(int i = 1; i < n; i++) {
			long temp = fib;
			fib = prevfib + temp;
			prevfib = temp;
		}
		
		return fib;
	}
}
