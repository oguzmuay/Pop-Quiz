package com.ogz.quizappbe.service;

import com.ogz.quizappbe.model.Question;
import com.ogz.quizappbe.model.Quiz;
import com.ogz.quizappbe.model.QuizResult;
import com.ogz.quizappbe.repository.QuizResultRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class QuizResultService {
    QuizService service;
    QuizResultRepository repository;
    public QuizResultService(QuizService service, QuizResultRepository repository){
        this.service = service;
        this.repository = repository;
    }

    public QuizResult createQuizResult(String id, Quiz quiz) throws Exception {
        Quiz realQuiz = service.findById(id);
        if (realQuiz == null)
            throw new Exception("Quiz Not Found");
        List<Question> questionList = quiz.getQuestionList();
        List<Question> realQuestionList = realQuiz.getQuestionList();
        int correctAnswerCount = 0;
        for (int i = 0; i < questionList.size(); i++) {
            if (questionList.get(i).getCorrectAnswer() == realQuestionList.get(i).getCorrectAnswer())
                correctAnswerCount++;
        }
        return new QuizResult(realQuiz.getTitle(), questionList.size(), correctAnswerCount, id);
    }

}
