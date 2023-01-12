import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, TextInput} from 'react-native-paper';
import AnswerCard from '../../components/AnswerCard';
import QuestionCard from '../../components/QuestionCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useCreateQuestion, useGetAllQuestion} from '../../api/QuestionApi';
import {useCreateQuiz} from '../../api/QuizApi';
import {useQuery, useQueryClient} from 'react-query';
import {QUESTION_QUERY} from '../../constants/queries';

const Stack = createStackNavigator();

const Main = ({navigation}) => {
  const [questions, setQuestions] = useState([]);
  const {mutate} = useCreateQuiz();
  const client = useQueryClient();
  const questionQuery = client.getQueryData(QUESTION_QUERY);
  console.log('Test', questionQuery);
  return (
    <View
      style={{
        padding: 24,
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 24}}>Yeni Quizi Giriniz:</Text>
      <FlatList
        data={questions}
        renderItem={({item}) => {
          const question = questionQuery.find(quest => quest.id === item);
          return (
            <TouchableOpacity
              onLongPress={() => {
                let tempQuestions = [...questions];
                tempQuestions = tempQuestions.filter(value => value !== item);
                setQuestions(tempQuestions);
                console.log('delete');
              }}
              style={{marginVertical: 8}}>
              <QuestionCard question={question} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => {
          return item;
        }}
        style={{flex: 1}}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          style={{width: '40%', alignSelf: 'center', marginRight: 8}}
          mode="contained"
          onPress={() => {
            navigation.navigate('SelectQuesting', {
              setQuestions: value => {
                setQuestions([...questions, value]);
              },
            });
          }}>
          Soru Sec
        </Button>
        <Button
          style={{width: '40%', alignSelf: 'center'}}
          mode="contained"
          onPress={() => {
            mutate({
              quiz: {title: 'Deneme', questionList: questions, creatorId: '11'},
            });
            navigation.goBack();
          }}>
          Olustur
        </Button>
      </View>
    </View>
  );
};

const AddNewQuestion = ({navigation, route}) => {
  const {setQuestions} = route.params;
  const {data} = useGetAllQuestion();
  return (
    <View style={{padding: 24, width: '100%', height: '100%'}}>
      <Text>Soruyu Seciniz</Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(item);
                setQuestions(item.id);
                navigation.goBack();
              }}
              style={{marginVertical: 8}}>
              <QuestionCard question={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => {
          return index + item;
        }}
        style={{flex: 1}}
      />
    </View>
  );
};

const QuizEntryPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Quiz"
        component={Main}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SelectQuesting"
        component={AddNewQuestion}
      />
    </Stack.Navigator>
  );
};

export default QuizEntryPage;
