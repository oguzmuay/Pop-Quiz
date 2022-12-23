import {View, Text} from 'react-native';
import React from 'react';

const QuizResultsPage = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          width: '100%',
          fontSize: 36,
          fontWeight: '700',
          textAlign: 'center',
        }}>
        Sonuclanmis Bir Quiz'iniz Bulunmamaktadir.
      </Text>
    </View>
  );
};

export default QuizResultsPage;
