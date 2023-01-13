package com.ogz.quizappbe.controller;

import com.ogz.quizappbe.model.Question;
import com.ogz.quizappbe.model.Quiz;
import com.ogz.quizappbe.repository.QuizRepository;
import com.ogz.quizappbe.service.QuestionService;
import com.ogz.quizappbe.service.QuizService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    QuizService service;
    QuestionService qService;

    public QuizController(QuizService service, QuestionService qService) {
        this.service = service;
        this.qService=  qService;
    }

    @GetMapping("/")
    public ResponseEntity getAllQuiz() {
        return new ResponseEntity<>(service.getAllQuiz(), HttpStatus.OK);
    }

    @PostMapping("/")
    public Quiz createQuiz(@RequestBody HashMap quiz) {
        List<Question> questionList = new ArrayList<>();
        for (String questionId : (List<String>) quiz.get("questionList")) {
            Question tempQuestion = qService.getById(questionId);
            if (tempQuestion != null)
                questionList.add(tempQuestion);
        }

        return service.createQuiz(new Quiz((String) quiz.get("title"), questionList, (String) quiz.get("creatorId")));
    }

    @GetMapping("/byCreatorId")
    public ResponseEntity getQuizByCreator(@RequestParam String id) throws Exception {
        return new ResponseEntity<>(service.getQuizByCreator(id),HttpStatus.OK);
    }


}
