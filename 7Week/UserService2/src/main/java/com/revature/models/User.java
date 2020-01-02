package com.revature.models;

public class User {

	private String name;
	
	private String astrologicalSign;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String name, String astrologicalSign) {
		super();
		this.name = name;
		this.astrologicalSign = astrologicalSign;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAstrologicalSign() {
		return astrologicalSign;
	}

	public void setAstrologicalSign(String astrologicalSign) {
		this.astrologicalSign = astrologicalSign;
	}

	@Override
	public String toString() {
		return "User [name=" + name + ", astrologicalSign=" + astrologicalSign + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((astrologicalSign == null) ? 0 : astrologicalSign.hashCode());
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
		User other = (User) obj;
		if (astrologicalSign == null) {
			if (other.astrologicalSign != null)
				return false;
		} else if (!astrologicalSign.equals(other.astrologicalSign))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	
	
}
