package com.devtso.tsmovie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtso.tsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
