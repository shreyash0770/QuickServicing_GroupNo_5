package com.main.model;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="feedback")
public class Feedback {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int f_id;
	
	private String f_name;
	
	private long  f_mobile;
	
	private String f_email;
	
	private String f_message;

	public Feedback() {
		
	}
	
	public Feedback(String f_name, long f_mobile, String f_email, String f_message) {
		super();
		this.f_name = f_name;
		this.f_mobile = f_mobile;
		this.f_email = f_email;
		this.f_message = f_message;
	}

	public int getF_id() {
		return f_id;
	}

	public void setF_id(int f_id) {
		this.f_id = f_id;
	}

	public String getF_name() {
		return f_name;
	}

	public void setF_name(String f_name) {
		this.f_name = f_name;
	}

	public long getF_mobile() {
		return f_mobile;
	}

	public void setF_mobile(long f_mobile) {
		this.f_mobile = f_mobile;
	}

	public String getF_email() {
		return f_email;
	}

	public void setF_email(String f_email) {
		this.f_email = f_email;
	}

	public String getF_message() {
		return f_message;
	}

	public void setF_message(String f_message) {
		this.f_message = f_message;
	}
	
	
	
	
	
	
}
