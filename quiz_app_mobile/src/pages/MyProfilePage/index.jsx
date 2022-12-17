import {View, Text} from 'react-native';
import React from 'react';
import {Avatar, Button} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyProfile = () => {
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
        <Button mode="contained" style={{width: 240, marginVertical: 24}}>
          Profili Duzenle
        </Button>
        <Button mode="contained" style={{width: 240}}>
          Cikis Yap
        </Button>
      </View>
    </View>
  );
};

const EditMyProfile = () => {
  return <></>;
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
