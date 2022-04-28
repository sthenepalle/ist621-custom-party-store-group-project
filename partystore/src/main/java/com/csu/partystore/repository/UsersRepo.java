package com.csu.partystore.repository;

import org.springframework.data.repository.CrudRepository;

import com.csu.partystore.models.Users;

public interface UsersRepo extends CrudRepository<Users, Long>{
}
