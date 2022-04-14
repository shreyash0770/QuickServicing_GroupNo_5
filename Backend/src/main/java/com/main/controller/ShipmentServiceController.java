package com.main.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.model.ShipmentService;
import com.main.repository.ShipmentServiceRepository;

@RestController
@RequestMapping("/")
public class ShipmentServiceController {
	
    @Autowired
	private ShipmentServiceRepository shipmentServiceRepository;

	
	//get all ShipmentServices
	@GetMapping("/shipmentServices")
	public List<ShipmentService> getallShipmentServices(){
			return shipmentServiceRepository.findAll();	
	}
	
	
	//to add shipmentService
	@PostMapping("/shipmentServices")
	public ShipmentService createShipmentService(@RequestBody ShipmentService shipmentService){
			return shipmentServiceRepository.save(shipmentService);
	}
	
}
