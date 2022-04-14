package com.main.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "services")
public class Service {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ser_Id;
	private String ser_Type;
	private Double ser_Price;


	public Service() {

	}


	public Service(String ser_Type, Double ser_Price) {
		super();
		this.ser_Type = ser_Type;
		this.ser_Price = ser_Price;
	}


	public int getSer_Id() {
		return ser_Id;
	}
	public void setSer_Id(int ser_Id) {
		this.ser_Id = ser_Id;
	}
	public String getSer_Type() {
		return ser_Type;
	}
	public void setSer_Type(String ser_Type) {
		this.ser_Type = ser_Type;
	}
	public Double getSer_Price() {
		return ser_Price;
	}
	public void setSer_Price(Double ser_Price) {
		this.ser_Price = ser_Price;
	}



}
