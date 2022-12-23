import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list/index';
import {CLASSES_VALUES} from '../../constants/classes';

const RegisterPage = () => {
  const isStudent = false;
  const [remember, setRemember] = useState(false);
  const [clas, setClass] = useState('Belirtilmedi');
  const studentRegister = () => {};
  const teacherRegister = () => {};
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <View style={{width: '100%', marginTop: 16, paddingHorizontal: 32}}>
        <Text
          style={{
            fontSize: 48,
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: 24,
          }}>
          POP-QUIZ
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: 24,
          }}>
          {isStudent ? 'Ogrenci ' : 'Ogretmen '}Uye Olma
        </Text>
        <TextInput style={{marginTop: 16}} label={'Ad'} mode={'outlined'} />
        <TextInput style={{marginTop: 12}} label={'Soyad'} mode={'outlined'} />
        <View style={{marginTop: 16}}>
          <SelectList
            label={'Ders'}
            placeholder={'Ders Giriniz'}
            setSelected={value => {
              setClass(value);
              console.log(value);
            }}
            boxStyles={{borderRadius: 4}}
            inputStyles={{fontSize: 16}}
            dropdownTextStyles={{fontSize: 16}}
            data={CLASSES_VALUES.map((clas, index) => {
              return {...clas, disabled: clas.key === clas};
            })}
            save={'value'}
          />
        </View>
        <TextInput
          style={{marginTop: 16}}
          label={'Telefon'}
          mode={'outlined'}
        />
        <TextInput style={{marginTop: 16}} label={'Email'} mode={'outlined'} />
        <Button
          style={{marginTop: 16, borderRadius: 4, fontSize: 16}}
          mode={'contained'}
          onPress={() => {
            isStudent ? studentRegister() : teacherRegister();
          }}>
          Uye Ol
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
