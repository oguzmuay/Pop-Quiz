import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import {useCreateQuestion} from '../../api/QuestionApi';
import {useGetAllQuiz, useGetQuizByCreatorID} from '../../api/QuizApi';
import AnswerCard from '../../components/AnswerCard';
import QuestionCard from '../../components/QuestionCard';
import QuizCard from '../../components/QuizCard';
import QuizEntryPage from '../QuizEntryPage';

const Stack = createStackNavigator();
const INITIAL_QUESTION = {
  question: '',
  answers: [],
  answer: -1,
  image: '',
};
const AddNewQuestion = () => {
  const {mutate} = useCreateQuestion();
  const [question, setQuestion] = useState(INITIAL_QUESTION);
  const [answer, setAnswer] = useState('');
  return (
    <View style={{padding: 24}}>
      <Text style={{fontSize: 24}}>Yeni Soruyu Giriniz:</Text>
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
        renderItem={({item, index}) => {
          return (
            <AnswerCard
              index={index}
              answer={item}
              selectedAnswer={question?.correctAnswer}
              setAnswer={value => {
                setQuestion({...question, correctAnswer: value});
              }}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item + index;
        }}
      />
      <TextInput
        onChangeText={value => {
          setAnswer(value);
        }}
        value={answer}
        mode="outlined"
        label={'Yeni Cevap'}
      />
      <Button
        onPress={() => {
          setQuestion({...question, answers: [...question.answers, answer]});
          setAnswer('');
        }}
        mode="contained"
        style={{
          borderRadius: 4,
          marginTop: 16,
          marginBottom: 8,
          marginHorizontal: 8,
        }}>
        Cevap Ekle
      </Button>
      <Button
        onPress={() => {
          console.log(question);
          mutate({question});
          setQuestion(INITIAL_QUESTION);
        }}
        mode="contained"
        style={{borderRadius: 4, margin: 8}}>
        Soruyu Kaydet
      </Button>
    </View>
  );
};
const QuizListPage = ({route, navigation: {navigate}}) => {
  const {data} = useGetQuizByCreatorID('11');

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      }}>
      <Text style={{fontSize: 36, fontWeight: '700', alignSelf: 'center'}}>
        Quizler
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <QuizCard teacher={true} quiz={item} />;
        }}
        keyExtractor={(item, index) => {
          return item + index;
        }}
        style={{flex: 1, padding: 8}}
      />
      <View
        style={{
          marginVertical: 16,
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 8,
        }}>
        <Button
          onPress={() => {
            navigate('NewQuiz');
          }}
          mode="contained"
          style={{width: '50%', marginRight: 8}}>
          <Text>Yeni Quiz</Text>
        </Button>
        <Button
          onPress={() => {
            navigate('NewQuestion');
          }}
          mode="contained"
          style={{width: '50%'}}>
          <Text>Yeni Soru</Text>
        </Button>
      </View>
    </View>
  );
};

const TeacherQuizListPage = ({route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="QuizList"
        component={QuizListPage}
      />
      <Stack.Screen
        // options={{headerShown: false}}
        name="NewQuestion"
        component={AddNewQuestion}
      />
      <Stack.Screen name="NewQuiz" component={QuizEntryPage} />
    </Stack.Navigator>
  );
};

export default TeacherQuizListPage;
