import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QuizEntryPage from '../QuizEntryPage';
import MyProfilePage from '../MyProfilePage';
const Tab = createBottomTabNavigator();
const TeacherPage = ({}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={'Yeni Quiz'} component={QuizEntryPage} />
      <Tab.Screen name={'Ogrenci Sonuclari'} component={QuizEntryPage} />
      <Tab.Screen name={'Profilim'} component={MyProfilePage} />
    </Tab.Navigator>
  );
};

export default TeacherPage;
