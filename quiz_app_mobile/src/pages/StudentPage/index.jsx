import React from 'react';
import {Text, View} from 'react-native';
import StudentQuizListPage from '../StudentQuizListPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyProfile from '../MyProfilePage';
import QuizResultsPage from '../QuizResultsPage';

const Tab = createBottomTabNavigator();

const Student = () => {
  return (
    <View>
      <Text>Student</Text>
    </View>
  );
};

const StudentPage = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={'Quizler'} component={StudentQuizListPage} />
      <Tab.Screen name={'Sonuclar'} component={QuizResultsPage} />
      <Tab.Screen name={'Profilim'} component={MyProfile} />
    </Tab.Navigator>
  );
};

export default StudentPage;
