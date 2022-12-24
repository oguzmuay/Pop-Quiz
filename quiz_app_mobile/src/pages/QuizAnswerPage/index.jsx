import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
const QuizAnswerPage = ({
  selectedQuiz = [
    {
      question: 'Bu bir deneme sorusudur',
      answers: ['Deneme 1', 'Deneme 2', 'Deneme 3', 'Deneme 4'],
      answer: undefined,
    },
    {
      question: 'Bu bir deneme sorusudur 2',
      answers: ['Deneme 1', 'Deneme 2', 'Deneme 3', 'Deneme 4'],
      answer: undefined,
    },
    {
      question: 'Bu bir deneme sorusudur 3',
      answers: ['Deneme 1', 'Deneme 2', 'Deneme 3', 'Deneme 4'],
      answer: undefined,
    },
    {
      question: 'Bu bir deneme sorusudur 4',
      answers: ['Deneme 1', 'Deneme 2', 'Deneme 3', 'Deneme 4'],
      answer: undefined,
    },
  ],
}) => {
  const [quiz, setQuiz] = useState(selectedQuiz);
  const [index, setIndex] = useState(0);

  return (
    <View style={{width: '100%', height: '100%', padding: 16}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24}}>Soru -) {index + 1}</Text>
      </View>
      <Text style={{marginTop: 8, fontSize: 20, minHeight: 300}}>
        {quiz[index].question}
      </Text>
      <View
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {quiz[index].answers.map((answer, answerIndex) => {
          return (
            <TouchableOpacity
              key={answer + answerIndex}
              onPress={() => {
                const tempQuiz = [...quiz];
                tempQuiz[index].answer = answerIndex;
                setQuiz(tempQuiz);
              }}
              style={{
                width: '100%',
                minHeight: 50,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
                borderRadius: 8,
                borderWidth: 2,
                borderColor:
                  answerIndex === quiz[index].answer ? 'purple' : 'black',
              }}>
              <Text>
                {String.fromCharCode(65 + answerIndex)}-){'  '}
              </Text>
              <Text>{answer}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 16,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          onPress={() => {
            setIndex(index - 1);
          }}
          disabled={index === 0}
          style={{borderRadius: 8, width: 120}}
          mode={'contained'}>
          Preview
        </Button>
        {index !== selectedQuiz.length - 1 ? (
          <Button
            onPress={() => {
              setIndex(index + 1);
            }}
            style={{borderRadius: 8, width: 120}}
            mode={'contained'}>
            Next
          </Button>
        ) : (
          <Button
            onPress={() => {
              console.log('Finish Quiz');
            }}
            style={{borderRadius: 8, width: 120}}
            mode={'contained'}>
            Finish
          </Button>
        )}
      </View>
    </View>
  );
};

export default QuizAnswerPage;
