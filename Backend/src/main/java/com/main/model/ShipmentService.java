package com.main.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "shipmentServices")
public class ShipmentService {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sh_Id;
	
	private String sh_Name;
	
	private String sh_Address;
	
	private String sh_Email;
	
	private String sh_Password;
	
	private String sh_Phone;
	
	private String sh_CurrentLocation;
	
	private String sh_destination;
	
	private String sh_City;
	
	private int sh_pincode;

	public ShipmentService() {
		
	}

	public ShipmentService(String sh_Name, String sh_Address, String sh_Email, String sh_Password, String sh_Phone,
			String sh_CurrentLocation, String sh_destination, String sh_City, int sh_pincode) {
		super();
		this.sh_Name = sh_Name;
		this.sh_Address = sh_Address;
		this.sh_Email = sh_Email;
		this.sh_Password = sh_Password;
		this.sh_Phone = sh_Phone;
		this.sh_CurrentLocation = sh_CurrentLocation;
		this.sh_destination = sh_destination;
		this.sh_City = sh_City;
		this.sh_pincode = sh_pincode;
	}
	
	

	public int getSh_Id() {
		return sh_Id;
	}

	public void setSh_Id(int sh_Id) {
		this.sh_Id = sh_Id;
	}

	public String getSh_Name() {
		return sh_Name;
	}

	public void setSh_Name(String sh_Name) {
		this.sh_Name = sh_Name;
	}

	public String getSh_Address() {
		return sh_Address;
	}

	public void setSh_Address(String sh_Address) {
		this.sh_Address = sh_Address;
	}

	public String getSh_Email() {
		return sh_Email;
	}

	public void setSh_Email(String sh_Email) {
		this.sh_Email = sh_Email;
	}

	public String getSh_Password() {
		return sh_Password;
	}

	public void setSh_Password(String sh_Password) {
		this.sh_Password = sh_Password;
	}

	public String getSh_Phone() {
		return sh_Phone;
	}

	public void setSh_Phone(String sh_Phone) {
		this.sh_Phone = sh_Phone;
	}

	public String getSh_CurrentLocation() {
		return sh_CurrentLocation;
	}

	public void setSh_CurrentLocation(String sh_CurrentLocation) {
		this.sh_CurrentLocation = sh_CurrentLocation;
	}

	public String getSh_destination() {
		return sh_destination;
	}

	public void setSh_destination(String sh_destination) {
		this.sh_destination = sh_destination;
	}

	public String getSh_City() {
		return sh_City;
	}

	public void setSh_City(String sh_City) {
		this.sh_City = sh_City;
	}

	public int getSh_pincode() {
		return sh_pincode;
	}

	public void setSh_pincode(int sh_pincode) {
		this.sh_pincode = sh_pincode;
	}
	
	
	
	
	



}
