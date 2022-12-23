import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, TextInput} from 'react-native-paper';
import AnswerCard from '../../components/AnswerCard';
const Stack = createStackNavigator();

const INITIAL_QUEST = {
  question: '',
  answers: [],
  answer: -1,
  image: '',
};

const AddNewQuestion = () => {
  const [question, setQuestion] = useState(INITIAL_QUEST);
  const [answer, setAnswer] = useState('');
  return (
    <View style={{paddingHorizontal: 24}}>
      <Text>Yeni Soruyu Giriniz:</Text>
      {/*Resim uploadlanacak*/}
      <TextInput
        onChangeText={value => {
          setQuestion({...question, question: value});
        }}
        value={question.question}
        mode="outlined"
        label={'Soru'}
      />
      <FlatList
        data={question.answers}
        renderItem={({item}) => {
          return <AnswerCard answer={item} />;
        }}
        keyExtractor={item => {
          return item;
        }}
      />
      <TextInput
        onChangeText={value => {
          setAnswer(value);
        }}
        value={answer}
        mode="outlined"
        label={'Cevap'}
      />
      <Button
        onPress={() => {
          setQuestion({...question, answers: [...question.answers, answer]});
          setAnswer('');
          console.log(question);
        }}
        mode="contained"
        style={{borderRadius: 4}}>
        Cevap Ekle
      </Button>
      <Button onPress={() => {}} mode="contained" style={{borderRadius: 4}}>
        Soruyu Kaydet
      </Button>
    </View>
  );
};

const AddNewQuiz = () => {
  return <View></View>;
};

const QuizEntryPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="NewQuestion"
        component={AddNewQuestion}
      />
      <Stack.Screen name="NewQuiz" component={AddNewQuiz} />
    </Stack.Navigator>
  );
};

export default QuizEntryPage;
