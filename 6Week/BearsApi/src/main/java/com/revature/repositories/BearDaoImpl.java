package com.revature.repositories;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManagerFactory;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revature.models.Bear;

//@Repository I AM NO LONGER USING THIS IMPL
public class BearDaoImpl  {

	private SessionFactory sf;
	
	@Autowired
	public BearDaoImpl(EntityManagerFactory emf) {
		this.sf = emf.unwrap(SessionFactory.class);
	}
	
	
	@Override
	public List<Bear> findAllBears() {
		// TODO Auto-generated method stub
		List<Bear> ret = new ArrayList<>();
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		Query<Bear> q = s.createQuery("FROM Bear");
		
		ret = q.list();
		t.commit();
		s.close();
		return ret;
	}


	@Override
	public Bear findBearById(int id) {
		// TODO Auto-generated method stub
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		Query<Bear> q = s.createQuery("FROM Bear WHERE bearId = :bid");//to use a param we specify it with a colon
		q.setParameter("bid", id);
		Bear b = q.getSingleResult();
		t.commit();
		s.close();
		return b;
	}


	@Override
	public Bear saveOneBear(Bear b) {
		// TODO Auto-generated method stub
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		s.save(b);
		t.commit();
		s.close();
		return b;
	}

}
