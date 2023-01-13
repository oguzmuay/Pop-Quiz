package com.ogz.quizappbe.repository;

import com.ogz.quizappbe.model.Quiz;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuizRepository extends MongoRepository<Quiz,String> {
}
