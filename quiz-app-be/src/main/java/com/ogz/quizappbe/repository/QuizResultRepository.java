package com.ogz.quizappbe.repository;

import com.ogz.quizappbe.model.QuizResult;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuizResultRepository extends MongoRepository<QuizResult,String> {
}
