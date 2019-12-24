package com.revature;



import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.revature.models.Bear;
import com.revature.util.SessionFactoryUtil;

public class HibernateLauncher {

	public static void main(String[] args) {
		SessionFactory sf = SessionFactoryUtil.getSessionFactory();
		Session ses = sf.openSession();
		Transaction t = ses.beginTransaction();
		Bear yogi = (Bear) ses.get(Bear.class, 2);
		System.out.println(yogi);
		t.commit();
		ses.close();
	}
}
