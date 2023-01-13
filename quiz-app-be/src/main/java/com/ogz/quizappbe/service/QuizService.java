package com.ogz.quizappbe.service;

import com.ogz.quizappbe.model.Quiz;
import com.ogz.quizappbe.repository.QuizRepository;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    QuizRepository repository;

    public QuizService(QuizRepository repository) {
        this.repository = repository;
    }


    public List<Quiz> getAllQuiz(){
        return repository.findAll();
    }

    public Quiz createQuiz(Quiz quiz) {
        return repository.insert(quiz);
    }

    public Quiz findById(String Id) {
        return repository.findById(Id).orElse(null);
    }

    public List<Quiz> getQuizByCreator(String id) throws Exception {
        Quiz quiz = new Quiz(id);
        Example<Quiz> quizExample = Example.of(quiz);
        return repository.findAll(quizExample);
    }

}
