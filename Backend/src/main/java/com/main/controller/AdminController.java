package com.main.controller;





import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.main.model.Admin;
import com.main.repository.AdminRepository;
import com.main.service.AdminService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class AdminController {
	
	@Autowired
	private AdminRepository adminRepository;	
	
	@Autowired
	private AdminService adminservice;
	
	
	        //---------------------------------Admin-------------------------------------------
	
	//Get Admin Details
	@GetMapping("/admin")
	public List<Admin> getdetails() {
		
		return adminRepository.findAll();
	}
	
	

	@PostMapping("/alogin")
	public ResponseEntity<Admin> loginAd(@RequestBody Admin admin)
	{
		return adminservice.loginAdmin(admin);
	}	

	
		
}
