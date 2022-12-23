import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, Checkbox, TextInput} from 'react-native-paper';

const LoginPage = ({title = 's', navigation}) => {
  const [remember, setRemember] = useState(false);
  return (
    <View style={{width: '100%', marginTop: 16, paddingHorizontal: 32}}>
      <TextInput
        label={title === 's' ? 'Ogrenci Numarasi' : 'Ogretmen Numarasi'}
        mode={'outlined'}
        style={{marginBottom: 16}}
      />
      <TextInput label={'Sifre'} mode={'outlined'} />
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 8}}>
          <Checkbox
            status={remember ? 'checked' : 'uncheked'}
            onPress={() => {
              setRemember(!remember);
            }}
          />
          <Text style={{fontSize: 16, alignSelf: 'center'}}>Beni Hatirla</Text>
        </View>
        <View style={{marginTop: 8, display: 'flex', justifyContent: 'center'}}>
          <TouchableOpacity>
            <Text style={{fontSize: 16}}>Sifreni mi unuttun ?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        style={{marginTop: 24, borderRadius: 4}}
        mode={'contained'}
        onPress={() => {
          navigation.navigate(title === 's' ? 'Student' : 'Teacher');
          console.log('Giris Yap');
        }}>
        {' '}
        Giris Yap{' '}
      </Button>
      <Text style={{textAlign: 'center', marginVertical: 16}}>Ya da</Text>
      <View style={{width: '100%', display: 'flex', alignItems: 'center'}}>
        <Button
          style={{width: '100%', borderRadius: 4}}
          mode={'flat'}
          onPress={() => {
            console.log('Uye Ol');
            navigation.navigate('Register');
          }}>
          Uye Ol
        </Button>
      </View>
    </View>
  );
};

export default LoginPage;
