package arrays;

import java.util.Arrays;

public class Driver {

	public static void main(String[] args) {
		int[] array1 = new int[10];
		
		System.out.println(Arrays.toString(array1));

		for(int i = 0; i < 10; i++) {
			array1[i] = i;
		}
		
		System.out.println(Arrays.toString(array1));
		
		int[][] array2 = new int[10][];
		
		System.out.println(Arrays.toString(array2));
		
		for(int i = 0; i < 10; i++) {
			array2[i] = new int[2];
		}
		
		for(int i = 0; i < 10; i++) {
			System.out.println("[" + array2[i][0] + ", " + array2[i][1] + "]");
		}
		
		System.out.println("===========");
		
		boolean[][] array3 = new boolean[10][2];
		
		for(int i = 0; i < 10; i++) {
			System.out.println("[" + array3[i][0] + ", " + array3[i][1] + "]");
		}
		
		int[][] array4 = new int[5][];
		
		for(int i = 0; i < 5; i++) {
			array4[i] = new int[i + 1];
		}
		
		// Loop through the rows
		for(int i = 0; i < 5; i++) {
			StringBuilder sb = new StringBuilder("[");
			
			// Loop through the columns for that row
			for(int j = 0; j < array4[i].length; j++) {
				sb.append(array4[i][j]);
				
				if(j < array4[i].length - 1) {
					sb.append(", ");
				}
			}
			sb.append("]");
			System.out.println(sb.toString());
		}
		
		// There's two different ways to declare the sizes
		// for multi-dimensional arrays
		
		// The first way has the same size for every row
		int[][] array5 = new int[10][2];
		// The sizes for every dimension is included
		
		// The second way is to assign each row separately
		int[][] array6 = new int[4][];
		// The sizes for some dimensions are left blank for now
		
		// We create the sizes later
		for(int i = 0; i < 4; i++) {
			array6[i] = new int[i + 2];
		}
	}

}
