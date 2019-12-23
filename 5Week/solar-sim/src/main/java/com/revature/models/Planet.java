package com.revature.models;

import com.revature.datastructures.TwoDimensionalTuple;

public class Planet extends CelestialBody {
	private String name;

	public Planet() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Planet(long mass, TwoDimensionalTuple position, int velocity, boolean retrograde, int maxOrbit) {
		super(mass, position, velocity, retrograde, maxOrbit);
		// TODO Auto-generated constructor stub
	}

	public Planet(long mass, TwoDimensionalTuple position, int velocity, boolean retrograde, int maxOrbit, String name) {
		super(mass, position, velocity, retrograde, maxOrbit);
		this.name = name;
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Planet other = (Planet) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return super.toString() + " Planet [name=" + name + "]";
	}

	
	
	
	

}
