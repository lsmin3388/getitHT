package com.getit.Question.repository;

import com.getit.Question.domain.Characters;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterRepository extends JpaRepository<Characters, Long> {
}
