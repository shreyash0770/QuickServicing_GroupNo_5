package com.main.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vehicles")
public class Vehicle {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int v_id;
	
	private String v_Type;
	
	private String v_Brand;
	
	private String v_Name;
	
	private int v_Number;
	

	
	public Vehicle() {
		
	}
	

	public Vehicle(String v_Type, String v_Brand, String v_Name, int v_Number) {
		super();
		this.v_Type = v_Type;
		this.v_Brand = v_Brand;
		this.v_Name = v_Name;
		this.v_Number = v_Number;
	}


	public int getV_id() {
		return v_id;
	}
	public void setV_id(int v_id) {
		this.v_id = v_id;
	}
	public String getV_Type() {
		return v_Type;
	}
	public void setV_Type(String v_Type) {
		this.v_Type = v_Type;
	}
	public String getV_Brand() {
		return v_Brand;
	}
	public void setV_Brand(String v_Brand) {
		this.v_Brand = v_Brand;
	}
	public String getV_Name() {
		return v_Name;
	}
	public void setV_Name(String v_Name) {
		this.v_Name = v_Name;
	}
	public int getV_Number() {
		return v_Number;
	}
	public void setV_Number(int v_Number) {
		this.v_Number = v_Number;
	}
	
	
	

}
