package com.ogz.quizappbe.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuizResult {
    @Id
    public String id;
    public String quizTitle;
    public int questionCount;
    public int correctAnswerCount;
    public String studentId;

    public QuizResult(String title,int questionCount,int correctAnswerCount, String id) {
        quizTitle = title;
        this.questionCount = questionCount;
        this.correctAnswerCount = correctAnswerCount;
        studentId = id;
    }

}
