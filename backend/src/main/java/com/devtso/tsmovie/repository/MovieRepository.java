package com.devtso.tsmovie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtso.tsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
