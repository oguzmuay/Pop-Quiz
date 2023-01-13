package com.ogz.quizappbe.service;

import com.ogz.quizappbe.model.Question;
import com.ogz.quizappbe.model.Quiz;
import com.ogz.quizappbe.repository.QuestionRepository;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    QuestionRepository repository;
    public QuestionService(QuestionRepository repository) {
        this.repository = repository;
    }
    public List<Question> getAllQuestion(){
        return repository.findAll();
    }

    public Question createQuestion(Question question) {
        return repository.insert(question);
    }

    public Question getById(String id) {
        System.out.println(id);
        return repository.findById(id).orElse(null);
    }

}
