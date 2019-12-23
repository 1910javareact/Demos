package com.revature.comparisons;

import java.util.Comparator;

import com.revature.models.CelestialBody;

public class CelestialBodySpeedComparator implements Comparator<CelestialBody>{

	@Override
	public int compare(CelestialBody o1, CelestialBody o2) {
		// TODO Auto-generated method stub
		if(o1.getVelocity() < o2.getVelocity()) {
			return -1;
		}else if(o2.getVelocity() < o1.getVelocity()) {
			return 1;
		}else {
			return 0;
		}
	}

}
