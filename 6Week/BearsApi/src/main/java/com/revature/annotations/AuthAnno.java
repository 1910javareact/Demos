package com.revature.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface AuthAnno {
	public String[] roles();//give the annotation a field called roles
	//that is an array of strings @AuthAnno(roles = ["User","Admin"])
}
