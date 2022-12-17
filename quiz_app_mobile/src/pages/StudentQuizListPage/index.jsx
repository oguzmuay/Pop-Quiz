import React, {useState} from 'react';
import {View, Text} from 'react-native';
import QuizNotFound from '../../components/QuizNotFound';

const Page = ({}) => {
  return (
    <View>
      <Text>Quiziniz Var</Text>
    </View>
  );
};

const StudentQuizListPage = props => {
  const [quizzes, setQuizzes] = useState([]);
  console.log(quizzes.length);
  return (
    <View>{quizzes.length === 0 ? <QuizNotFound /> : <Page {...props} />}</View>
  );
};

export default StudentQuizListPage;
