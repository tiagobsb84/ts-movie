package com.devtso.tsmovie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtso.tsmovie.entities.Score;
import com.devtso.tsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
