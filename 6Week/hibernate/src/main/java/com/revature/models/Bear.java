package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Table(name = "bears", schema = "bears_schema")
@Entity//hibernate, manage this
public class Bear {
	
	@Id//this is the primary key
	@Column(name = "bear_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)//the db will auto make this field for new things
	private int bearId;
	
	@Column(name = "bear_type")
	private String type;
	
	@Column(name = "bear_name")
	private String name;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cave", referencedColumnName = "cave_id")
	private Cave cave;

	public Bear() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Bear(int bearId, String type, String name, Cave cave) {
		super();
		this.bearId = bearId;
		this.type = type;
		this.name = name;
		this.cave = cave;
	}

	public int getBearId() {
		return bearId;
	}

	public void setBearId(int bearId) {
		this.bearId = bearId;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Cave getCave() {
		return cave;
	}

	public void setCave(Cave cave) {
		this.cave = cave;
	}

	@Override
	public String toString() {
		return "Bear [bearId=" + bearId + ", type=" + type + ", name=" + name + ", cave=" + cave + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + bearId;
		result = prime * result + ((cave == null) ? 0 : cave.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((type == null) ? 0 : type.hashCode());
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
		Bear other = (Bear) obj;
		if (bearId != other.bearId)
			return false;
		if (cave == null) {
			if (other.cave != null)
				return false;
		} else if (!cave.equals(other.cave))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!type.equals(other.type))
			return false;
		return true;
	}

	
	
}
