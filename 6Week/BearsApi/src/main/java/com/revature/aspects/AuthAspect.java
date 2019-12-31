package com.revature.aspects;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.revature.annotations.AuthAnno;
import com.revature.models.Bear;

@Aspect
@Component
public class AuthAspect {

	
	
	@Around("@annotation(auth) && execution(* com.revature.controllers..*(..))")
	public Object authenticateUser(ProceedingJoinPoint pjp, AuthAnno auth) throws Throwable{
		Bear b = getLoggedInBear();
		//System.out.println(b);
		if(b == null) {
			throw new Exception();
		} else {
			for(String role : auth.roles()) {
				if(b.getName().equals(role)) {//if they are appropriately permissioned
					return pjp.proceed();//return the value that they were supposed to get
				}
			}
			throw new Exception();
		}
	}
	
	public static Bear getLoggedInBear() {
		HttpServletRequest req = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();
		return (Bear) req.getSession().getAttribute("bear");
	}
	
	
}
