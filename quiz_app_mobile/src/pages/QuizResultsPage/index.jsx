import {View, Text} from 'react-native';
import React from 'react';
import ResultCard from '../../components/ResultCard';

const QuizResultsPage = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}>
      <Text style={{fontSize: 36, fontWeight: '600'}}>Quiz Sonuclari</Text>
      <ResultCard />
      <ResultCard />
      <ResultCard />
    </View>
  );
};

export default QuizResultsPage;
