import React from 'react';
import {View, Text} from 'react-native';
const QuizNotFound = ({}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{fontSize: 36, fontWeight: '700', textAlign: 'center'}}>
          Suan Size Atanmis
        </Text>
        <Text style={{fontSize: 36, fontWeight: '700', textAlign: 'center'}}>
          Bir Quiz Bulunmamaktadir
        </Text>
      </View>
    </View>
  );
};

export default QuizNotFound;
