import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QuizEntryPage from '../QuizEntryPage';
import MyProfilePage from '../MyProfilePage';
import TeacherQuizListPage from '../TeacherQuizListPage';
import TeacherResultsPage from '../TeacherResultsPage';
const Tab = createBottomTabNavigator();

const TeacherPage = ({}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={'Quizler'} component={TeacherQuizListPage} />
      <Tab.Screen name={'Ogrenci Sonuclari'} component={TeacherResultsPage} />
      <Tab.Screen name={'Profilim'} component={MyProfilePage} />
    </Tab.Navigator>
  );
};

export default TeacherPage;
