package com.ogz.quizappbe.controller;

import com.ogz.quizappbe.model.Quiz;
import com.ogz.quizappbe.model.QuizResult;
import com.ogz.quizappbe.service.QuizResultService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/result")
public class QuizResultController {


    QuizResultService service;
    public QuizResultController(QuizResultService service){
    this.service = service;

    }

    @PostMapping("/")
    public ResponseEntity<QuizResult> getQuizResult(@RequestParam String id,@RequestBody Quiz quiz) throws Exception {
        service.createQuizResult(id, quiz);
        return new ResponseEntity<>(new QuizResult(), HttpStatus.OK);
    }

}
