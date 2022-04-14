package com.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.main.model.ServiceProvider;
import com.main.repository.ServiceProviderRepository;

@Service
public class ServiceProviderService {
	
	@Autowired
	public ServiceProviderRepository providerRepository;
	
	
	public ResponseEntity<ServiceProvider> loginUser1(ServiceProvider user) {
		ServiceProvider provider = providerRepository.findByEmail(user.getEmail());
		
		if(user.getEmail().equals(provider.getEmail()) && user.getPassword().equals(provider.getPassword())) {
			return new ResponseEntity<ServiceProvider>(provider,HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}
	

}
