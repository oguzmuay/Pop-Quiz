import {View, Text} from 'react-native';
import React from 'react';
import {Avatar, Button, TextInput} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {SelectList} from 'react-native-dropdown-select-list/index';
import {CLASSES_VALUES} from '../../constants/classes';

const Stack = createStackNavigator();

const MyProfile = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <Text style={{fontSize: 48, fontWeight: '600', textAlign: 'center'}}>
        Profilim
      </Text>
      <View
        style={{
          width: '100%',
          marginVertical: 24,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Avatar.Image size={120} />
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate('EditMyProfile');
          }}
          style={{width: 240, marginVertical: 24}}>
          Profili Duzenle
        </Button>
        <Button mode="contained" style={{width: 240}}>
          Cikis Yap
        </Button>
      </View>
    </View>
  );
};

const EditMyProfile = ({isStudent, navigation}) => {
  return (
    <View style={{marginTop: 16, paddingHorizontal: 32}}>
      <Text>{isStudent ? 'Ogrenci Numaraniz' : 'Ogretmen Numaraniz'}</Text>
      <TextInput mode={'outlined'} label={'Ad'} />
      <TextInput mode={'outlined'} label={'Soyad'} />
      <View style={{marginTop: 8}}>
        <SelectList
          label={'Ders'}
          placeholder={'Ders Giriniz'}
          setSelected={value => {
            setClass(value);
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
      <TextInput mode={'outlined'} label={'Telefon'} />
      <TextInput mode={'outlined'} label={'Email'} />
      <Button mode="contained" style={{borderRadius: 4, marginTop: 16}}>
        Gunceller
      </Button>
    </View>
  );
};

const MyProfilePage = ({isStudent}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="MyProfile"
        component={MyProfile}
      />
      <Stack.Screen name="EditMyProfile" component={EditMyProfile} />
    </Stack.Navigator>
  );
};

export default MyProfilePage;
