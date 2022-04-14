package com.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.main.model.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Integer>{

}
