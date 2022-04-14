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
import com.main.model.Customer;
import com.main.repository.CustomerRepository;
import com.main.service.CustomerService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class CustomerController {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private CustomerService cservice;
	
	//-------------------------------------------Customer------------------------------------------
	
	
	
		//Get All customer
		@GetMapping("/customers")
		public List<Customer> getAllCustomers(){
			
			return customerRepository.findAll();
		}
		
		//get customer by id rest api
			@GetMapping("/customers/{id}")
			public ResponseEntity<Customer> getCustomerById(@PathVariable int id) {
				
				Customer customer =customerRepository.findById(id)
						.orElseThrow(()-> new ResourceNotFoundException("Customer Not Exists with id :" +id));
				return ResponseEntity.ok(customer);	
			}
			
			//create Customer rest api	
			@PostMapping("/customers")
			public Customer createCustomer(@RequestBody Customer customer) {		
				return customerRepository.save(customer);
			}
			
//			//Update Customer rest api
			@PutMapping("/customers/{id}")
			public ResponseEntity<Customer> updateCustomer(@PathVariable int id,@RequestBody Customer customerDetails){
				
				Customer customer =customerRepository.findById(id)
						.orElseThrow(()-> new ResourceNotFoundException("Customer Not Exists with id :" +id));
				
				customer.setC_Name(customerDetails.getC_Name());
				customer.setEmail(customerDetails.getEmail());
				customer.setC_City(customerDetails.getC_City());
				customer.setC_Address(customerDetails.getC_Address());
				customer.setC_mobile(customerDetails.getC_mobile());
				customer.setC_Pincode(customerDetails.getC_Pincode());
				customer.setPassword(customerDetails.getPassword());

				Customer updatedCustomer = customerRepository.save(customer);
				return ResponseEntity.ok(updatedCustomer);
				
			}
			
			
//			//Delete Customer rest api
			@DeleteMapping("/customers/{id}")
			public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable int id){
				Customer customer =customerRepository.findById(id)
						.orElseThrow(()-> new ResourceNotFoundException("Customer Not Exists with id :" +id));
				
				customerRepository.delete(customer);
				Map<String, Boolean> response = new HashMap<>();
				response.put("deleted", Boolean.TRUE);
				return ResponseEntity.ok(response);
			}
			
			
			
			// Login feature
			@PostMapping("/clogin")
			public ResponseEntity<Customer> loginCust(@RequestBody Customer cus)
			{
				return cservice.logincustomer(cus);
			}
			
			
	

}
