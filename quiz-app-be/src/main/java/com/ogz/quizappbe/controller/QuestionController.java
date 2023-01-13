package com.ogz.quizappbe.controller;

import com.ogz.quizappbe.model.Question;
import com.ogz.quizappbe.model.Quiz;
import com.ogz.quizappbe.service.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/question")
public class QuestionController {
    QuestionService service;
    public QuestionController(QuestionService service){
    this.service = service;
    }
    @GetMapping("/")
    public ResponseEntity getAllQuiz() {
        return new ResponseEntity<>(service.getAllQuestion(), HttpStatus.OK);
    }

    @PostMapping("/")
    public Question createQuestion(@RequestBody Question question) {
        return service.createQuestion(question);
    }


}
