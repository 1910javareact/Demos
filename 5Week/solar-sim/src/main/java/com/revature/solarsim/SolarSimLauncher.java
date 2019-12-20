package com.revature.solarsim;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.revature.datastructures.TwoDimensionalTuple;
import com.revature.models.Planet;

public class SolarSimLauncher {
	
	public static Logger log = LogManager.getRootLogger();
	
	public static Planet earth = new Planet(10, new TwoDimensionalTuple(5,0), 1, false, 5, "Earth");
	
	public static String[][] ss = new String [11][11];
	
	
	public static void main(String [] args) throws InterruptedException {
		
		for(int i = 0; i < ss.length; i++) {
			for(int j = 0; j < ss[i].length; j++) {
				ss[i][j] = "~";
			}
		}
		
		boolean running = true;
		int seconds = 0;
		while(running) {
			
			String ssdisplay = "";
			for(String[] s : ss) {
				ssdisplay += "[ ";
				for(String s2 : s) {
					ssdisplay += " " + s2 + " ";
				}
				ssdisplay += " ]\n";
			}
			
			log.info("\n" + ssdisplay);
			ss[earth.getPosition().getTuple()[0]][earth.getPosition().getTuple()[1]] = "~";
			int [] res = earth.orbit();
			ss[res[0]][res[1]] = "P";
			
			
			Thread.sleep(1000);
			seconds++;
		}
		
	}

}
