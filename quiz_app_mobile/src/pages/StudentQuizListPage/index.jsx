import React, {useState} from 'react';
import {View, Text, FlatList, Touchable} from 'react-native';
import QuizNotFound from '../../components/QuizNotFound';
import QuizCard from '../../components/QuizCard';
import {useGetAllQuiz} from '../../api/QuizApi';
import {useQueryClient} from 'react-query';
import {QUESTION_QUERY} from '../../constants/queries';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Page = ({quizzes, navigate}) => {
  return (
    <View style={{padding: 16, height: '100%'}}>
      <Text style={{fontSize: 36, fontWeight: '600'}}>Quizler</Text>
      <FlatList
        data={quizzes}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => {}} style={{marginVertical: 8}}>
              <QuizCard quiz={item} navigate={navigate} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => {
          return item + index + 's';
        }}
        style={{flex: 1}}
      />
    </View>
  );
};

const StudentQuizListPage = props => {
  const {
    navigation: {navigate},
  } = props;
  const {data} = useGetAllQuiz();
  return (
    <View>
      {data?.length === 0 ? (
        <QuizNotFound />
      ) : (
        <Page navigate={navigate} quizzes={data} {...props} />
      )}
    </View>
  );
};

export default StudentQuizListPage;
// <QuizAnswerPage />
