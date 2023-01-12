import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {toDateString} from '../../utils/date';

const QuizCard = ({quiz, teacher = false}) => {
  return (
    <View
      style={{
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'pink',
        width: '100%',
        marginBottom: 4,
      }}>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 24, fontWeight: '600'}}>{quiz?.title}</Text>
          <Text>
            Soru Sayisi:
            {quiz.questionList === null ? 0 : quiz.questionList.length}
          </Text>
        </View>
        {!teacher && (
          <View style={{display: 'flex', justifyContent: 'center'}}>
            <Button
              mode="contained"
              onPress={() => {
                console.log('Detay');
              }}>
              Sinava Gir
            </Button>
          </View>
        )}
      </View>
      <Text style={{width: '100%', textAlign: 'center'}}>
        Bitis Tarihi : {toDateString(new Date())}
      </Text>
    </View>
  );
};

export default QuizCard;
