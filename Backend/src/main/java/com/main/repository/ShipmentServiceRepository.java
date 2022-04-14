package com.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.main.model.ShipmentService;

@Repository
public interface ShipmentServiceRepository extends JpaRepository<ShipmentService, Integer>{

}
