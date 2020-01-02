package com.revature.models;

public class Cat {

	private String name;
	
	private User leasthatedPerson;

	public Cat() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cat(String name, User leasthatedPerson) {
		super();
		this.name = name;
		this.leasthatedPerson = leasthatedPerson;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public User getLeasthatedPerson() {
		return leasthatedPerson;
	}

	public void setLeasthatedPerson(User leasthatedPerson) {
		this.leasthatedPerson = leasthatedPerson;
	}

	@Override
	public String toString() {
		return "Cat [name=" + name + ", leasthatedPerson=" + leasthatedPerson + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((leasthatedPerson == null) ? 0 : leasthatedPerson.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cat other = (Cat) obj;
		if (leasthatedPerson == null) {
			if (other.leasthatedPerson != null)
				return false;
		} else if (!leasthatedPerson.equals(other.leasthatedPerson))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	
	
	
}
