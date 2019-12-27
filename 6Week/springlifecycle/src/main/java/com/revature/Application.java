package com.revature;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.services.UserService;

public class Application {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//out IoC container
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		
		//tell container to get me a bean, with id User Service
		UserService us = (UserService) ac.getBean("User Service");
		System.out.println("We made a Bean!!!");
		//shut down ac
		((AbstractApplicationContext)ac).close();

	}

}
