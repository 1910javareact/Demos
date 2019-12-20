package com.revature.models;
//anything that exists in space, that has above some minimum mass is a celestial body


import com.revature.datastructures.TwoDimensionalTuple;

public abstract class CelestialBody implements Orbitable{

	private long mass;
	
	private TwoDimensionalTuple position;
	
	//number of x or y it transitions in 1 second
	// must be greater than 0
	private int velocity;
	//coming or going in its orbit
	private boolean retrograde;
	
	private int maxOrbit;
	
	
	public int[] orbit() {
		int[] res = new int[1];
		if(this.retrograde) {
			res = orbit(-this.velocity, this.position.getTuple(), this.maxOrbit);
		}else {
			res = orbit(this.velocity, this.position.getTuple(), this.maxOrbit);
		}
		if(Math.abs(res[0]) == this.maxOrbit && Math.abs(res[1]) == this.maxOrbit) {
			this.retrograde = !this.retrograde;
		}
		this.position.setTuple(res[0], res[1]);
		return res;
	}
	
	private int[] orbit(int velocity, int[] initialPosition, int maxOrbit) {
		int[] res = new int[2];
		if((Math.ceil(Math.random()*2)) == 2) {
			res[1] = initialPosition[1];
			if(Math.abs(initialPosition[0] + velocity) > maxOrbit) {
				res[0] = maxOrbit;
			}else {
				res[0] = initialPosition[0] + velocity ;
			}
		}else {
			res[0] = initialPosition[0];
			if(Math.abs(initialPosition[1] + velocity) > maxOrbit) {
				res[1] = maxOrbit;
			}else {
				res[1] = initialPosition[1] + velocity ;
			}
		}
		return res;
	}

	public CelestialBody() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CelestialBody(long mass, TwoDimensionalTuple position, int velocity, boolean retrograde, int maxOrbit) {
		super();
		this.mass = mass;
		this.position = position;
		this.velocity = velocity;
		this.retrograde = retrograde;
		this.maxOrbit = maxOrbit;
	}

	public long getMass() {
		return mass;
	}

	public void setMass(long mass) {
		this.mass = mass;
	}

	public TwoDimensionalTuple getPosition() {
		return position;
	}

	public void setPosition(TwoDimensionalTuple position) {
		this.position = position;
	}

	public int getVelocity() {
		return velocity;
	}

	public void setVelocity(int velocity) {
		this.velocity = velocity;
	}

	public boolean isRetrograde() {
		return retrograde;
	}

	public void setRetrograde(boolean retrograde) {
		this.retrograde = retrograde;
	}

	public int getMaxOrbit() {
		return maxOrbit;
	}

	public void setMaxOrbit(int maxOrbit) {
		this.maxOrbit = maxOrbit;
	}

	@Override
	public String toString() {
		return "CelestialBody [mass=" + mass + ", position=" + position + ", velocity=" + velocity + ", retrograde="
				+ retrograde + ", maxOrbit=" + maxOrbit + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (mass ^ (mass >>> 32));
		result = prime * result + maxOrbit;
		result = prime * result + ((position == null) ? 0 : position.hashCode());
		result = prime * result + (retrograde ? 1231 : 1237);
		result = prime * result + velocity;
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
		CelestialBody other = (CelestialBody) obj;
		if (mass != other.mass)
			return false;
		if (maxOrbit != other.maxOrbit)
			return false;
		if (position == null) {
			if (other.position != null)
				return false;
		} else if (!position.equals(other.position))
			return false;
		if (retrograde != other.retrograde)
			return false;
		if (velocity != other.velocity)
			return false;
		return true;
	}
	
	
	
}
