import {View, Text} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';
const AnswerCard = ({answer, index = 0}) => {
  return (
    <View
      style={{
        width: '100%',
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 8,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text>
        {String.fromCharCode(65 + index)} {' - )   '} {answer}
      </Text>
      <RadioButton />
    </View>
  );
};

export default AnswerCard;