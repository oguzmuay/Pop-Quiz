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
public class Quiz {
    @Id
    private String id;
    private String title;
    private List<Question> questionList;
    private String creatorId;

    public Quiz(String creatorId) {
        this.creatorId = creatorId;
    }
    public Quiz(String title,List<Question> questionList,String creatorId) {
        this.title = title;
        this.questionList = questionList;
        this.creatorId = creatorId;
    }
}
