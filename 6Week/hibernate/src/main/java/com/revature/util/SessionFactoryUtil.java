package com.revature.util;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public class SessionFactoryUtil {
	private static SessionFactory sf;
	
    static {
		Configuration c = new Configuration().configure();
		c.setProperty("hibernate.connection.username", System.getenv("BEARS_USER"));
		c.setProperty("hibernate.connection.password", System.getenv("BEARS_PASS"));
		c.setProperty("hibernate.connection.url", "jdbc:postgresql://" + System.getenv("BEARS_HOST") + ":5432/" + System.getenv("BEARS_DB_NAME"));
		c.setProperty("hibernate.default.schema", System.getenv("BEARS_SCHEMA"));
		ServiceRegistry sr = new StandardServiceRegistryBuilder().applySettings(c.getProperties()).build();
		sf = c.buildSessionFactory(sr);
		System.out.println(System.getenv("BEARS_SCHEMA"));
	}
    
    public static SessionFactory getSessionFactory() {
    	return sf;
    }
	
}
