package com.revature;

import org.apache.log4j.Logger;

public class Driver {
	
	// Loggers are created using the static getLogger method, using the Class
	// object for the Driver class
	private static Logger log = Logger.getLogger(Driver.class);
	
	/*
	 * Log4j loggers have several logging levels
	 * 
	 * OFF: No logging at all
	 * ALL: Turns on all levels of logging
	 * TRACE: Adds more information to DEBUG logs
	 * DEBUG: Basically for developers, turns on all of the proceeding levels as well
	 * INFO: Important business processes that have finished as well as good news 
	 *       that is "as expected:
	 *       Generally System administrators will watch info logs to monitor events
	 * WARN: Suggests that the application might be continued, but you should take
	 *       extra caution
	 * ERROR: Shouts that something has gone very wrong and should be investigated
	 *       immediately
	 * FATAL: Very uncommon, but signals that something is terribly wrong, and will
	 *        likely result in application failure
	 */
	
	public static void main(String[] args) {
		log.info("Main method executed!");
		
		try {
			recur();
		} catch(Error e) {
			log.error("Something terrible has happened!");
		}

	}
	
	public static void recur() {
		recur();
	}
}
