package com.main.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="ServiceBooking")
public class ServiceBooking{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bId;
	
	private String vtype;

	private String vBrand;
	
	private String vName;
	
	private int vNumber;
	
	private int vKm;
	
	private String bookingDate;
	
	private String pickup_drop;
	
	private String drive_in;
	
	private String service;
	
	private String extra_service;
	
	private String status;
	
	@Column(name = "customerId")
	private int customerId;
	
	@Column(name = "sproviderId")
	private int sproviderId;
	
	

	public ServiceBooking() {
		super();
		// TODO Auto-generated constructor stub
	}

	



	public ServiceBooking(String vtype, String vBrand, String vName, int vNumber, int vKm, String bookingDate,
			String pickup_drop, String drive_in, String service, String extra_service, String status, int customerId,
			int sproviderId) {
		super();
		this.vtype = vtype;
		this.vBrand = vBrand;
		this.vName = vName;
		this.vNumber = vNumber;
		this.vKm = vKm;
		this.bookingDate = bookingDate;
		this.pickup_drop = pickup_drop;
		this.drive_in = drive_in;
		this.service = service;
		this.extra_service = extra_service;
		this.status = status;
		this.customerId = customerId;
		this.sproviderId = sproviderId;
	}






	public int getbId() {
		return bId;
	}







	public void setbId(int bId) {
		this.bId = bId;
	}







	public String getVtype() {
		return vtype;
	}



	public void setVtype(String vtype) {
		this.vtype = vtype;
	}


	public String getvBrand() {
		return vBrand;
	}







	public void setvBrand(String vBrand) {
		this.vBrand = vBrand;
	}







	public String getvName() {
		return vName;
	}







	public void setvName(String vName) {
		this.vName = vName;
	}







	public int getvNumber() {
		return vNumber;
	}







	public void setvNumber(int vNumber) {
		this.vNumber = vNumber;
	}







	public int getvKm() {
		return vKm;
	}



	public void setvKm(int vKm) {
		this.vKm = vKm;
	}




	public String getBookingDate() {
		return bookingDate;
	}





	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}



	public String getPickup_drop() {
		return pickup_drop;
	}


	public void setPickup_drop(String pickup_drop) {
		this.pickup_drop = pickup_drop;
	}


	public String getDrive_in() {
		return drive_in;
	}


	public void setDrive_in(String drive_in) {
		this.drive_in = drive_in;
	}


	public String getExtra_service() {
		return extra_service;
	}


	public void setExtra_service(String extra_service) {
		this.extra_service = extra_service;
	}


	public int getCustomerId() {
		return customerId;
	}



	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}



	public int getSproviderId() {
		return sproviderId;
	}



	public void setSproviderId(int sproviderId) {
		this.sproviderId = sproviderId;
	}



	public String getService() {
		return service;
	}



	public void setService(String service) {
		this.service = service;
	}





	public String getStatus() {
		return status;
	}





	public void setStatus(String status) {
		this.status = status;
	}
	
	
	

	
}


