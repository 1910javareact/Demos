package com.revature.datastructures;

//We are doing real encapsulation
public class TwoDimensionalTuple implements Comparable<TwoDimensionalTuple>{

	private int xPos;
	
	private int yPos;
	
	/***
	 * This is the only public getter for a tuple
	 * it wraps all positions into an array that is created on the spot
	 * @return
	 * 		int array of size two with [xPos, yPos]
	 */
	public int[] getTuple() {
		return new int[]{this.xPos, this.yPos};
	}
	
	public void setTuple(int x, int y) {
		this.xPos = x;
		this.yPos = y;
	}
	
	

	public TwoDimensionalTuple(int xPos, int yPos) {
		super();
		this.xPos = xPos;
		this.yPos = yPos;
	}

	public TwoDimensionalTuple() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "TwoDimensionalTuple [xPos=" + xPos + ", yPos=" + yPos + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + xPos;
		result = prime * result + yPos;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TwoDimensionalTuple other = (TwoDimensionalTuple) obj;
		if (xPos != other.xPos)
			return false;
		if (yPos != other.yPos)
			return false;
		return true;
	}

	public int compareTo(TwoDimensionalTuple o) {
		// TODO Auto-generated method stub
		double thisDist = Math.sqrt(Math.pow(this.xPos, 2) + Math.pow(this.yPos, 2));
		double oDist = Math.sqrt(Math.pow(o.xPos, 2) + Math.pow(o.yPos, 2));
		if(thisDist < oDist) {
			return -1;
		}else if( oDist < thisDist) {
			return 1;
		}else {
			return 0;
		}	
	}
	
	
	
	
	
}
