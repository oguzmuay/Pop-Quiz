import React from 'react';
import {FlatList, View} from 'react-native';
import {Card, Text} from 'react-native-paper';

const QuestionCard = ({question}) => {
  console.log(question);
  return (
    <Card
      mode="outlined"
      style={{width: '100%', marginVertical: 8, borderRadius: 4}}>
      <Card.Title title={question?.question} />
      <Card.Content>
        <Text variant="bodyMedium">
          Yanit: {question?.answers[question?.correctAnswer]}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default QuestionCard;
