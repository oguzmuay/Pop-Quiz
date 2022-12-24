import React, {useState} from 'react';
import {View, Text} from 'react-native';
import QuizNotFound from '../../components/QuizNotFound';
import QuizCard from '../../components/QuizCard';

const Page = ({}) => {
  return (
    <View style={{padding: 16}}>
      <Text style={{fontSize: 36, fontWeight: '600'}}>Quizler</Text>
      <QuizCard />
      <QuizCard />
      <QuizCard />
    </View>
  );
};

const StudentQuizListPage = props => {
  const [quizzes, setQuizzes] = useState([1]);
  console.log(quizzes.length);
  return (
    <View>{quizzes.length === 0 ? <QuizNotFound /> : <Page {...props} />}</View>
  );
};

export default StudentQuizListPage;
// <QuizAnswerPage />
