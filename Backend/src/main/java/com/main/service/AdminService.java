package com.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.main.model.Admin;
import com.main.repository.AdminRepository;


@Service
public class AdminService {

	@Autowired
	public AdminRepository adminRepository;
	
	
	public ResponseEntity<Admin> loginAdmin(Admin admin) {
		Admin ad = adminRepository.findByEmail(admin.getEmail());
		
		if(admin.getEmail().equals(ad.getEmail()) && admin.getPassword().equals(ad.getPassword())) {
			return new ResponseEntity<Admin>(ad,HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}
	
}
