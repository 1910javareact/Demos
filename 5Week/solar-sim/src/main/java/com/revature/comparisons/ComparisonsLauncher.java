package com.revature.comparisons;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.revature.datastructures.TwoDimensionalTuple;
import com.revature.models.Planet;

public class ComparisonsLauncher {

	public static Logger log = LogManager.getRootLogger();
	
	public static void main(String[] args) {
		
		//use a list, so I can change the object later, without breaking any code
		List<Planet> planets = new ArrayList<>();
		planets.add(new Planet(3180, new TwoDimensionalTuple(20, 20), 3, true, 100, "Jupiter"));
		planets.add(new Planet(10, new TwoDimensionalTuple(5, 5), 1, true, 5, "Earth"));
		planets.add(new Planet(1, new TwoDimensionalTuple(1, 1), 1, true, 1, "Mercury"));
		planets.add(new Planet(7, new TwoDimensionalTuple(9, 9), 2, true, 9, "Mars"));
		planets.add(new Planet(0, new TwoDimensionalTuple(100000, 100000), 200, true, 100000, "Pluto"));
		
		Collections.sort(planets);
		
		log.info(planets);
		
		planets.sort(new CelestialBodySpeedComparator());
		
		log.info(planets);
		
		planets.sort((p1,p2)->{
			return p1.getPosition().compareTo(p2.getPosition());
		});
		
		log.info(planets);
		
		
	}
	
	
	
}
