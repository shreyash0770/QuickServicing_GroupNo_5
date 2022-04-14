package com.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.main.model.Customer;
import com.main.repository.CustomerRepository;


@Service
public class CustomerService {
	
	@Autowired
	public CustomerRepository customerRepository;
	
	
	public ResponseEntity<Customer> logincustomer(Customer cust) {
		Customer customer = customerRepository.findByEmail(cust.getEmail());
		
		if(cust.getEmail().equals(customer.getEmail()) && cust.getPassword().equals(customer.getPassword())) {
			return new ResponseEntity<Customer>(customer,HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}

}
