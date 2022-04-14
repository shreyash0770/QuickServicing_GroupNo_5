package com.main.model;





import java.util.List;

import javax.persistence.CascadeType;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "serviceProviders")
public class ServiceProvider {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int s_Id;
	
	private String s_Name;
	
	private String s_Phone;
	
	private String s_Address;
	
	private String s_City;
	
	private int s_Pincode;
	
	private String email;
	
	private String password;
	
	private String s_Role;
	
//	@Column(name="s_Picture",columnDefinition = "MEDIUMBLOB")
//	@Lob
//	private Blob s_Picture;
	
	
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "s_Id",referencedColumnName = "s_Id")
	private List<Service> service;
	
	
	public ServiceProvider() {
		
	}







	public ServiceProvider(String s_Name, String s_Phone, String s_Address, String s_City, int s_Pincode, String email,
			String password, String s_Role, String s_Picture) {
		super();
		this.s_Name = s_Name;
		this.s_Phone = s_Phone;
		this.s_Address = s_Address;
		this.s_City = s_City;
		this.s_Pincode = s_Pincode;
		this.email = email;
		this.password = password;
		this.s_Role = s_Role;
		
		
	}







	public int getS_Id() {
		return s_Id;
	}







	public void setS_Id(int s_Id) {
		this.s_Id = s_Id;
	}







	public String getS_Name() {
		return s_Name;
	}







	public void setS_Name(String s_Name) {
		this.s_Name = s_Name;
	}







	public String getS_Phone() {
		return s_Phone;
	}







	public void setS_Phone(String s_Phone) {
		this.s_Phone = s_Phone;
	}







	public String getS_Address() {
		return s_Address;
	}







	public void setS_Address(String s_Address) {
		this.s_Address = s_Address;
	}







	public String getS_City() {
		return s_City;
	}







	public void setS_City(String s_City) {
		this.s_City = s_City;
	}







	public int getS_Pincode() {
		return s_Pincode;
	}







	public void setS_Pincode(int s_Pincode) {
		this.s_Pincode = s_Pincode;
	}







	public String getEmail() {
		return email;
	}







	public void setEmail(String email) {
		this.email = email;
	}







	public String getPassword() {
		return password;
	}







	public void setPassword(String password) {
		this.password = password;
	}







	public String getS_Role() {
		return s_Role;
	}







	public void setS_Role(String s_Role) {
		this.s_Role = s_Role;
	}








	public List<Service> getService() {
		return service;
	}







	public void setService(List<Service> service) {
		this.service = service;
	}


    
	
	
}
