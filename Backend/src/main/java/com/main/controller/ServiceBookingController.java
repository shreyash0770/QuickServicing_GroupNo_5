package com.main.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.exception.ResourceNotFoundException;
import com.main.model.ServiceBooking;
import com.main.repository.ServiceBookingRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class ServiceBookingController {
	
	@Autowired
	private ServiceBookingRepository bookingRepository;
	
//	@Autowired
//	private ServiceProviderService servbooking;
	
	
	//get all bookings
	@GetMapping("/booking")
	public List<ServiceBooking> getAllBookings(){
		
		return bookingRepository.findAll();
	}
	
	// get bookings by id rest api
	@GetMapping("/booking/{id}")
	public ResponseEntity<ServiceBooking> getBookingsById(@PathVariable int id) {
		
		ServiceBooking booking =bookingRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Customer Not Exists with id :" +id));
		return ResponseEntity.ok(booking);	
	}
	
	//add bookings
	@PostMapping("/booking")
	public ServiceBooking addBooking(@RequestBody ServiceBooking booking) {		
		return bookingRepository.save(booking);
	}
	
	
	
	//find by service provider ID
	@GetMapping("/bookingbycust/{sproviderId}")
	public List<ServiceBooking>searchServiceProvider(@PathVariable(value="sproviderId")  int sproviderId ){

		return bookingRepository.findByServiceId(sproviderId);
				
	}
	
	//Update Booking rest api
	@PutMapping("/booking/{id}")
	public ResponseEntity<ServiceBooking> updateStatus(@PathVariable int id,@RequestBody ServiceBooking booking){
		
		ServiceBooking servb =bookingRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("booking Not Exists with id :" +id));
		
		servb.setStatus(booking.getStatus());
		
		ServiceBooking updatedService = bookingRepository.save(servb);
		return ResponseEntity.ok(updatedService);
		
	}
	
	
	@DeleteMapping("/booking/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable int id){
		ServiceBooking booking =bookingRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Booking Not Exists with id :" +id));
		
		bookingRepository.delete(booking);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	@GetMapping("/bookingCheck/{customerId}")
	public List<ServiceBooking> statusCheck(@PathVariable(value="customerId")  int customerId ){

		return bookingRepository.checkStatus(customerId);
				
	}
	
	

	

}
