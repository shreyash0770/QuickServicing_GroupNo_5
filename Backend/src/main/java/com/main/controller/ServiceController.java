package com.main.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.model.Service;
import com.main.repository.ServiceRepository;

@RestController
@RequestMapping("/")
public class ServiceController {
	
	@Autowired
	private ServiceRepository serviceRepository;
	
	//get all services
	@GetMapping("/services")
	public List<Service> getAllServices(){
		
		return serviceRepository.findAll();
	}
	
	//to add services
	@PostMapping("/services")
	public Service createService(@RequestBody Service service) {
		
		return serviceRepository.save(service);
		
	}
	

}
