package com.csu.partystore.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.csu.partystore.models.UserDetails;

public interface UserDetailsRepo extends CrudRepository<UserDetails, Long>{
	
	@Query("select ud.email from UserDetails ud where ud.email= :email")
	public String isUserExists(@Param("email") String email);
	
	@Query(value="select concat(firstname, ' ', lastname) from user_details where email= :email", nativeQuery=true)
	public String getUserNameByEmial(@Param("email") String email);

}
