package com.revature.services;

import javax.annotation.*;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

import com.revature.daos.UserDao;

public class UserService implements BeanNameAware, BeanFactoryAware, ApplicationContextAware, InitializingBean, DisposableBean {

	private String beanName;
	
	private UserDao ud;
	
	@Autowired//is an example of dependency injection, constructor injection
	public UserService(UserDao ud) {
		this.ud = ud;
		System.out.println("Populate properties");
	}
	
	
	public UserService() {
		super();
		// TODO Auto-generated constructor stub
		System.out.println("Instantiate step");
	}

	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		// TODO Auto-generated method stub
		System.out.println("AC aware:" + applicationContext);
		
	}

	public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
		// TODO Auto-generated method stub
		System.out.println("Factory aware:" + beanFactory);
	}

	public void setBeanName(String name) {
		// TODO Auto-generated method stub
		this.beanName = name;
		System.out.println("Name Aware:" + name);
	}

	public void destroy() throws Exception {
		// TODO Auto-generated method stub
		System.out.println("This is the disposable bean interface");
		
	}

	public void afterPropertiesSet() throws Exception {
		// TODO Auto-generated method stub
		System.out.println("The initializing bean interface");
	}
	
	@PostConstruct
	public void customInit() {
		System.out.println("Custom Init Method");
	}
	
	@PreDestroy
	public void customDestroy() {
		System.out.println("Custom Destroy Method");
	}

	
	

}
