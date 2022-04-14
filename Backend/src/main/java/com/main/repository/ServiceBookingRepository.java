package com.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.main.model.ServiceBooking;


@Repository
public interface ServiceBookingRepository extends JpaRepository<ServiceBooking, Integer> {
	
	@Query
	(value = "Select * from service_booking sb where sb.sprovider_id=:n" ,nativeQuery = true)
	public List<ServiceBooking> findByServiceId(@Param("n") int sprovider_id);
	
	@Query
	(value = "Select * from service_booking sc where sc.customer_id=:n" , nativeQuery = true)
	public List<ServiceBooking> checkStatus(@Param("n") int customer_id);

}
