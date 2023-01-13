package com.ogz.quizappbe.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Question {
    @Id
    private String id;

    private String question;
    private List<String> answers;
    private int correctAnswer = -1;
    public Question(String id){
        this.id=id;
    }
}
