package com.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.model.Vehicle;
import com.main.repository.VehicleRepository;

@CrossOrigin(origins = "http://localhost:3000" )
@RestController
@RequestMapping("/")
public class VehicleController {
	
	@Autowired
	private VehicleRepository vehicleRepository;
	
	//Get All Vehicles
	@GetMapping("/vehicles")
	public List<Vehicle> getAllVehicles(){
		
		return vehicleRepository.findAll();
	}
	
	//Add Vehicle
	@PostMapping("/vehicles")
	public Vehicle createVehicle(@RequestBody Vehicle vehicle){
		
		return vehicleRepository.save(vehicle);
	}

}
