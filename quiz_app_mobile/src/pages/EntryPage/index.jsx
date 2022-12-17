import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';
import LoginPage from '../LoginPage';
const EntryPage = ({navigation}) => {
  const [title, setTitle] = useState('s');
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        padding: 16,
        display: 'flex',
        justifyContent: 'center',
        alignCenter: 'center',
      }}>
      <Text
        style={{
          fontSize: 48,
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: 24,
        }}>
        POP-QUIZ
      </Text>
      <View style={{width: '100%'}}>
        <SegmentedButtons
          value={title}
          onValueChange={setTitle}
          buttons={[
            {
              value: 's',
              label: 'Ogrenci',
            },
            {value: 't', label: 'Ogretmen'},
          ]}
        />
        <LoginPage title={title} navigation={navigation} />
      </View>
    </View>
  );
};

export default EntryPage;
