package com.diogosarti.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diogosarti.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
