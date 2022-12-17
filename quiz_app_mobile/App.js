import React from 'react';

import RegisterPage from './src/pages/RegisterPage';
import EntryPage from './src/pages/EntryPage';
import StudentPage from './src/pages/StudentPage';
import TeacherPage from './src/pages/TeacherPage';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          name={'Login'}
          component={EntryPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Register'}
          component={RegisterPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Student'}
          component={StudentPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Teacher'}
          component={TeacherPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
