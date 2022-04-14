package com.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.main.model.ServiceProvider;

@Repository
public interface ServiceProviderRepository extends JpaRepository<ServiceProvider, Integer>{

	public  ServiceProvider findByEmail(String email);
	
	@Query
	(value = "Select * from service_providers s where s.s_pincode=:n and s.s_role=:m" ,nativeQuery = true)
	public List<ServiceProvider> findByS_Pincode(@Param("n") int s_Pincode ,@Param("m") String s_Role);
	
//	@Query(value="select * from service_providers where s_pincode=:pin",nativeQuery = true)
//	  public List<ServiceProvider> getDocumentById(@Param("pin") int s_Pincode);
}
